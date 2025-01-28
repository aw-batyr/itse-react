import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  img: string;
  title: string;
  className?: string;
}

export const ThemeCard: FC<Props> = ({ className, img, title }) => {
  return (
    <article
      className={cn(
        "bg-bg_surface_container relative hover:bg-teritary_surface_container transition-all md:px-6 px-2 md:h-[224px] h-[124px]",
        className
      )}
    >
      <div className="bg-primary size-full -z-[10] absolute top-2.5 left-2.5" />
      <img src={img} alt="theme icon" className="md:size-20 size-12" />
      <h3 className="md:mt-6 mt-2 md:text-xl text-sm">{title}</h3>
    </article>
  );
};
