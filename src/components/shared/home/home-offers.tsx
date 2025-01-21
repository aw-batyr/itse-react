import { FC, useCallback, useEffect, useState } from "react";
import { Container, EmblaDots, OfferCard } from "../";
import useEmblaCarousel from "embla-carousel-react";

export const HomeOffers: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, setSlides] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setSlides(Array.from(Array(emblaApi.slideNodes().length).keys()));
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

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  return (
    <section className="bg-surface_high py-10 relative">
      <Container>
        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container mb-2 flex gap-6">
            <OfferCard
              className="embla__slide flex-[0_0_50%]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
            <OfferCard
              className="embla__slide flex-[0_0_50%]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
            <OfferCard
              className="embla__slide flex-[0_0_50%]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
            <OfferCard
              className="embla__slide flex-[0_0_50%]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
          </div>
        </div>

        <EmblaDots scrollTo={scrollTo} slides={4} active={selectedIndex} />
      </Container>
    </section>
  );
};
