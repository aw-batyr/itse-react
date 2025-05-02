import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";
import { useLangStore } from "@/store/lang";
import { btns } from "@/data/home/home-hero.data";
import { useTranslation } from "react-i18next";
import { useTranslate } from "@/hooks/use-translate";
interface Banner {
  lg: string;
  md?: string;
  sm?: string;
}

export const HomeHero: FC = () => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation("home");

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  // Получаем массив баннеров из переводов
  const banners = t("banners", { returnObjects: true }) as Banner[];

  // На мобильных и планшете показываем только первый баннер

  // Функция выбора нужного размера картинки

  function getBanner() {
    if (lg) return banners[0].lg;
    else if (md) return banners[0].md;
    else return banners[0].sm;
  }

  // useEffect(() => {
  //   if (emblaApi) autoplay.current?.play();
  // }, [emblaApi]);

  const translate = useTranslate(lang);

  // console.log(getBanner());

  return (
    <section className="flex flex-col gap-5">
      <div className="embla overflow-hidden">
        <div className="embla__container flex">
          <div className="embla__slide min-w-full lg:max-h-[600px] lg:min-h-[320px]">
            <img
              src={getBanner()}
              alt={`banner`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl">
        {btns[translate].data.map(({ title, link, blank }) => (
          <Link
            to={link}
            target={blank ? "_blank" : undefined}
            key={link}
            className="w-full"
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full overflow-hidden flex drop-shadow-sm shadow-md bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90"
              dangerouslySetInnerHTML={{ __html: title ?? "" }}
            />
          </Link>
        ))}
      </Container>
    </section>
  );
};
