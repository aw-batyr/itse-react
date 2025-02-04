import { FC } from "react";
import { Container, OfferCard } from "../";
import useEmblaCarousel from "embla-carousel-react";
import { useLangStore } from "@/store/lang";
import { offersData } from "@/data/home/home-offers.data";
import { useTranslate } from "@/hooks/use-translate";

export const HomeOffers: FC = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  const lang = useLangStore((state) => state.lang);

  return (
    <section className="bg-surface_high py-10 relative overflow-hidden">
      <Container>
        <div ref={emblaRef} className="embla">
          <div className="mb-2 flex gap-6 embla__container">
            {offersData[useTranslate(lang)].data.map((item) => (
              <OfferCard {...item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
