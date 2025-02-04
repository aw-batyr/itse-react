import { FC } from "react";
import { Container } from "..";
import { ThemeCard } from "../theme-card";
import { homeTheme } from "@/data/home/home-theme.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";

export const HomeTheme: FC = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section className="">
      <Container>
        <h2 className="h2 mb-10 text-center">
          {homeTheme[useTranslate(lang)].h2}
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {homeTheme[useTranslate(lang)].data.map((item) => (
            <ThemeCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
