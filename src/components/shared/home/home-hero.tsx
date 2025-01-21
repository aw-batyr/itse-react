import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export const btns = [
  {
    title: "Программа",
    link: "",
  },
  {
    title: "Документы",
    link: "",
  },
  {
    title: "Гид",
    link: "",
  },
  {
    title: "План выставки",
    link: "",
  },
];

export const HomeHero: FC<Props> = ({ className }) => {
  const [embalRef] = useEmblaCarousel();

  return (
    <section className="flex flex-col gap-5">
      <div ref={embalRef} className="embla">
        <div className="embla__container">
          <div className="embla__slide h-[600px] object-cover">
            <img src="/banner.png" alt="" />
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
