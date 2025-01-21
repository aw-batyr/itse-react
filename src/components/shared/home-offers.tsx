import { FC } from "react";
import { Container } from "./container";
import useEmblaCarousel from "embla-carousel-react";

export const HomeOffers: FC = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="bg-surface_high py-10">
      <Container>
        <div ref={emblaRef} className="embla">
          <div className="embla__container">
            <div className="embla__slide">
              <img src="/banner.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
