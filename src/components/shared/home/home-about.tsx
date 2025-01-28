import { FC } from "react";
import { AboutCard, Container } from "../";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

const data = [
  {
    nums: "4,200 m²",
    text: "выставочной площади",
  },
  {
    nums: "10000+",
    text: "Посетители посетят выставку",
  },
  {
    nums: "100+",
    text: "Экспоненты из более чем 30 стран",
  },
  {
    nums: "80%",
    text: "Участники принимают участие в принятии решений о закупках",
  },
];

export const HomeAbout: FC = () => {
  const [ebmblaRef] = useEmblaCarousel();

  return (
    <section>
      <Container className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="h2 md:mb-3 mb-6 text-left sm:text-center">
            Выставка-ярмарка «Международная Торговля и Услуги» в Ашхабаде
          </h2>
          <p className="md:text-base text-sm normal text-left sm:text-center text-[#454545]">
            С 29 апреля по 1 мая 2025 года столица Туркменистана, Ашхабад,
            станет центром международного делового сообщества благодаря
            крупнейшей выставке-ярмарке «Торговля и услуги». Организованная
            Торгово-промышленной палатой Туркменистана и компанией Turkmen Expo,
            эта выставка направлена на укрепление глобальных торговых связей,
            привлечение инвестиций и демонстрацию экономического потенциала
            страны.
          </p>
        </div>

        <div ref={ebmblaRef} className="embla overflow-hidden">
          <div className="flex embla__container items-center gap-6">
            {data.map((item) => (
              <AboutCard
                key={item.text}
                {...item}
                className="embla__slide flex-[0_0_288px]"
                nums="4,200 m²"
                text="выставочной площади"
              />
            ))}
          </div>
        </div>
        <Link to="/about" className="mx-auto">
          <Button variant={"outline"}>Подробнее о выставке</Button>
        </Link>
      </Container>
    </section>
  );
};
