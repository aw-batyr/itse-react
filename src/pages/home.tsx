import { FC } from "react";

import {
  HomeAbout,
  HomeHero,
  HomeOffers,
  HomeTheme,
  HomeTime,
} from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const Home: FC = () => {
  useScrollTop();

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
