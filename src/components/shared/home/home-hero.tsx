import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../";
import { Button } from "@/components/ui/button";

export const btns = [
  {
    title: "План выставки",
    link: "",
  },
  {
    title: "Забронировать стенд",
    link: "/form-stand",
  },
  {
    title: "Программа",
    link: "",
  },
  {
    title: "Гид по поездке и проживанию",
    link: "",
  },
];

export const HomeHero: FC = () => {
  const [embalRef] = useEmblaCarousel();

  return (
    <section className="flex flex-col gap-5">
      <div ref={embalRef} className="embla">
        <div className="embla__container">
          <div className="embla__slide h-[600px] object-cover">
            <img src="/banner.png" alt="" className="size-full object-cover" />
          </div>
        </div>
      </div>

      <Container className="flex items-center gap-6 text-2xl">
        {btns.map(({ title, link }) => (
          <Link key={title} to={link} className="w-full">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="w-full drop-shadow-sm shadow-md "
            >
              {title}
            </Button>
          </Link>
        ))}
      </Container>
    </section>
  );
};
