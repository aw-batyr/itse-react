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
        "bg-bg_surface_container relative hover:bg-teritary_surface_container transition-all px-6 h-[224px]",
        className
      )}
    >
      <div className="bg-primary size-full -z-[10] absolute top-2.5 left-2.5" />
      <img src={img} alt="theme icon" />
      <h3 className="mt-6 text-xl">{title}</h3>
    </article>
  );
};
