import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC, useCallback, useEffect, useState } from "react";
import { Container, EmblaDots } from "../";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const HomePartners: FC<Props> = ({ className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={cn("", className)}>
      <Container className="flex flex-col gap-10 relative w-full">
        <div className="flex item-center justify-between">
          <h2 className="h2">Участники выставки ITSE 2025</h2>

          <Button variant="outline" size={"sm"}>
            Все экспоненты
          </Button>
        </div>

        <button
          onClick={scrollPrev}
          className="nav-btn absolute top-[55%] -translate-y-1/2 -left-12"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={scrollNext}
          className="nav-btn absolute top-[55%] -translate-y-1/2 -right-12"
        >
          <ArrowRight />
        </button>

        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container gap-6 flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="embla__slide size-[184px] flex-[0_0_184px] bg-[#D9D9D9]"
              />
            ))}
          </div>
        </div>

        <EmblaDots scrollTo={scrollTo} slides={4} active={selectedIndex} />
      </Container>
    </section>
  );
};
