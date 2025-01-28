import { FC } from "react";
import { Container } from "..";
import { ThemeCard } from "../theme-card";

export const themes = [
  {
    title: "Пищевая продукция и сельское хозяйство",
    img: "/theme/1.svg",
  },
  {
    title: "Товары и услуги",
    img: "/theme/2.svg",
  },
  {
    title: "E-commerce",
    img: "/theme/3.svg",
  },
  {
    title: "Волокна, текстиль и одежда",
    img: "/theme/4.svg",
  },
  {
    title: "Продукция промышленного производства",
    img: "/theme/5.svg",
  },
  {
    title: "Профессиональные услуги",
    img: "/theme/6.svg",
  },
  {
    title: "Ремесленные производства",
    img: "/theme/7.svg",
  },
  {
    title: "Креативные индустрии",
    img: "/theme/8.svg",
  },
];

export const HomeTheme: FC = () => {
  return (
    <section className="">
      <Container>
        <h2 className="h2 mb-10 text-center">
          Тематические направления выставки
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {themes.map((item) => (
            <ThemeCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
