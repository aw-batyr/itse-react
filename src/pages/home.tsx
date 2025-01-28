import { FC } from "react";

import {
  HomeAbout,
  HomeHero,
  HomeOffers,
  HomeTheme,
  HomeTime,
} from "@/components/shared";

export const Home: FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
    </div>
  );
};
