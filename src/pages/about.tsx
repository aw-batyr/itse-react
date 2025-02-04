import {
  AboutBron,
  AboutPlace,
  AboutThemes,
  AboutTime,
} from "@/components/shared";
import { AboutHero } from "@/components/shared/about/about-hero";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { FC } from "react";

export const About: FC = () => {
  useScrollTop();

  return (
    <div>
      <AboutHero />
      <AboutThemes />
      <AboutTime />
      <AboutPlace />
      <AboutBron />
    </div>
  );
};
