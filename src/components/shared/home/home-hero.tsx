import useEmblaCarousel from "embla-carousel-react";
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "../";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";
import { useLangStore } from "@/store/lang";
import { btns } from "@/data/home/home-hero.data";
import { useTranslation } from "react-i18next";
import { useTranslate } from "@/hooks/use-translate";
import Autoplay from "embla-carousel-autoplay";

interface Banner {
  lg: string;
  md?: string;
  sm?: string;
}

export const HomeHero: FC = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 75 }, [
    autoplay.current,
  ]);
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation("home");

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  // Получаем массив баннеров из переводов
  const banners = t("banners", { returnObjects: true }) as Banner[];

  // На мобильных и планшете показываем только первый баннер

  // Функция выбора нужного размера картинки
  const getSrc = (banner: Banner) => {
    if (lg) return banner.lg;
    if (md && banner.md) return banner.md;
    if (!lg && banner.sm) return banner.sm;
    return banner.lg;
  };

  useEffect(() => {
    if (emblaApi) autoplay.current?.play();
  }, [emblaApi]);

  const translate = useTranslate(lang);

  return (
    <section className="flex flex-col gap-5">
      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex">
          {banners.map((banner, index) =>
            index !== 0 ? (
              <Link
                to={"/masterclasses"}
                key={index}
                className="embla__slide min-w-full lg:max-h-[600px] lg:min-h-[320px]"
              >
                <img
                  src={getSrc(banner)}
                  alt={`banner-${index}`}
                  className="w-full h-full object-cover"
                />
              </Link>
            ) : (
              <div
                key={index}
                className="embla__slide min-w-full lg:max-h-[600px] lg:min-h-[320px]"
              >
                <img
                  src={getSrc(banner)}
                  alt={`banner-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
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
