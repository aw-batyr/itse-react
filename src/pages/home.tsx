import { HomeAbout, HomeHero, HomeOffers } from "@/components/shared";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
    </div>
  );
};
