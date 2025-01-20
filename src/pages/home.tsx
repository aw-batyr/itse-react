import { HomeAbout, HomeHero } from "@/components/shared";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Home: FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />
    </div>
  );
};
