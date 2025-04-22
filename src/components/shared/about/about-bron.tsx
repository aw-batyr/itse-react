import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLangStore } from "@/store/lang";
import { aboutBron } from "@/data/about/about-bron";
import { useTranslate } from "@/hooks/use-translate";

interface Props {
  className?: string;
}

export const AboutBron: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section
      className={cn("md:py-20 py-10 relative overflow-hidden", className)}
    >
      <img
        src="/CTA.png"
        className="absolute top-0 left-0 size-full -z-10 object-cover"
      />

      <Container>
        <h3 className="h2 text-center !text-on_primary mb-6">
          {aboutBron[useTranslate(lang)].title}
        </h3>
        <p className="text-center md:text-lg text-sm  text-primary_04 max-w-[808px] mx-auto mb-10">
          {aboutBron[useTranslate(lang)].p}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to={"/stend-form"} className="w-full">
            <Button className="bg-white w-full text-primary hover:bg-white/90">
              {aboutBron[useTranslate(lang)].button1}
            </Button>
          </Link>

          <Link to={"/masterclasses"} className="w-full">
            <Button className="bg-white w-full hover:bg-white/90 text-primary">
              {aboutBron[useTranslate(lang)].button2}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
