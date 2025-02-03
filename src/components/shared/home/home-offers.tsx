import { FC } from "react";
import { Container, OfferCard } from "../";
import useEmblaCarousel from "embla-carousel-react";

export const HomeOffers: FC = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <section className="bg-surface_high py-10 relative overflow-hidden">
      <Container>
        <div ref={emblaRef} className="embla">
          <div className="mb-2 flex gap-6 embla__container">
            <OfferCard
              img="/offer-1.png"
              className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
              title="Гостиницы, трансфер, визы"
              btnText="Скачать путеводитель"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете ознакомиться с путеводителем"
              link="https://itse.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf"
            />
            <OfferCard
              btnText="Скачать план выставки"
              img="/offer-2.png"
              className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
              title="Ознакомьтесь с планом выставки ITSE 2025"
              link="https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf"
              text="Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
