import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  className?: string;
}

export const HomePartners: FC<Props> = ({ className }) => {
  const [embalRef] = useEmblaCarousel();

  return (
    <section className={cn("", className)}>
      <Container className="flex flex-col gap-10">
        <div className="flex item-center justify-between">
          <h2 className="h2">Участники выставки ITSE 2025</h2>
          <Button variant="outline" size={"sm"}>
            Все экспоненты
          </Button>
        </div>

        <div ref={embalRef} className="embla">
          <div className="embla__container gap-6 flex">
            <div className="embla__slide size-[184px] basis-[184px] bg-[#D9D9D9]"></div>
            <div className="embla__slide size-[184px] basis-[184px] bg-[#D9D9D9]"></div>
            <div className="embla__slide size-[184px] basis-[184px] bg-[#D9D9D9]"></div>
            <div className="embla__slide size-[184px] basis-[184px] bg-[#D9D9D9]"></div>
            <div className="embla__slide size-[184px] basis-[184px] bg-[#D9D9D9]"></div>
            <div className="embla__slide size-[184px] basis-[184px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
