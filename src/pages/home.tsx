import { FC } from "react";
import {
  HomeAbout,
  HomeHero,
  HomePartners,
  HomeTheme,
  HomeTime,
} from "@/components/shared";

interface Props {
  className?: string;
}

export const Home: FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />

      <HomeTheme />
      <HomeTime />
      <HomePartners />
    </div>
  );
};
