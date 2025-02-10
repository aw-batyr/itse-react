import { FC } from "react";
import { Container, Loader } from "..";
import { ThemeCard } from "../theme-card";
import { homeTheme } from "@/data/home/home-theme.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { useIndustries } from "@/hooks/tanstack/use-industries";

export const HomeTheme: FC = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useIndustries();

  if (isPending) return <Loader />;

  return (
    <section className="">
      <Container>
        <h2 className="h2 mb-10 text-center">
          {homeTheme[useTranslate(lang)].h2}
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {data?.map((item, i) => (
            <ThemeCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
