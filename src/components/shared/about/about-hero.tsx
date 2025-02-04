import { FC } from "react";
import { Container, Cover } from "../";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { aboutInfo } from "@/data/about/about-info";

interface Props {
  className?: string;
}

export const AboutHero: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <div className={className}>
      <Cover title={aboutInfo[useTranslate(lang)].cover} />

      <Container className="flex flex-col md:my-20 my-10 gap-16">
        <div className="flex flex-col gap-6">
          <h3 className="h2">{aboutInfo[useTranslate(lang)].title1} </h3>
          <p className="text-18">{aboutInfo[useTranslate(lang)].p1} </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="h2">{aboutInfo[useTranslate(lang)].title2}</h3>

          <ul className="list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal">
            {aboutInfo[useTranslate(lang)].ul.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="h2">{aboutInfo[useTranslate(lang)].title2}</h3>
          <ul className="list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal">
            {aboutInfo[useTranslate(lang)].ul2.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>

          <p className="text-18">{aboutInfo[useTranslate(lang)].bottomText} </p>
        </div>
      </Container>
    </div>
  );
};
