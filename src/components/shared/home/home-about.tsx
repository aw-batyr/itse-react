import { FC } from "react";
import { AboutCard, Container } from "../";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Language, useLangStore } from "@/store/lang";
import { aboutData } from "@/data/about.data";
import { useTranslate } from "@/hooks/use-translate";

export const HomeAbout: FC = () => {
  const [ebmblaRef] = useEmblaCarousel();
  const lang = useLangStore((state) => state.lang);

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
            {aboutData[useTranslate(lang)].data.map((item) => (
              <AboutCard
                key={item.text}
                {...item}
                className="embla__slide flex-[0_0_288px]"
              />
            ))}
          </div>
        </div>
        <Link to="/about" className="mx-auto">
          <Button variant={"outline"}>
            {lang === Language.RU
              ? "Подробнее о выставке"
              : "More about the exhibition"}
          </Button>
        </Link>
      </Container>
    </section>
  );
};
