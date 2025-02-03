import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";

export const btns = [
  {
    title: "План выставки",
    link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
    blank: true,
  },
  {
    title: "Забронировать стенд",
    link: "/stend-form",
  },
  {
    title: "B2B | B2G встречи",
    link: "/B2B-B2G",
  },
  {
    title: "Стать спонсором",
    link: "/become-sponsor",
  },
];

export const HomeHero: FC = () => {
  const [embalRef] = useEmblaCarousel();

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  function getBanner() {
    if (lg) return "/banners/ru/lg.jpg";
    else if (md) return "/banners/ru/md.jpg";
    else return "/banners/ru/sm.jpg";
  }

  return (
    <section className="flex flex-col gap-5">
      <div ref={embalRef} className="embla">
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src={getBanner()}
              alt=""
              className="size-full object-cover lg:max-h-[600px] lg:min-h-[320px]"
            />
          </div>
        </div>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl">
        {btns.map(({ title, link, blank }) => (
          <Link
            target={blank ? "_blank" : ""}
            key={title}
            to={link}
            className="w-full"
          >
            <Button
              size={"lg"}
              variant={"secondary"}
              className="w-full drop-shadow-sm shadow-md bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90"
            >
              {title}
            </Button>
          </Link>
        ))}
      </Container>
    </section>
  );
};
