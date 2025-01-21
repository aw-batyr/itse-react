import { FC } from "react";

import {
  HomeAbout,
  HomeHero,
  HomeOffers,
  HomePartners,
  HomeTheme,
  HomeTime,
} from "@/components/shared";

export const Home: FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HomeHero />
      <HomeAbout />
      <HomeOffers />

      <HomeTheme />
      <HomeTime />
      <HomePartners />
    </div>
  );
};
