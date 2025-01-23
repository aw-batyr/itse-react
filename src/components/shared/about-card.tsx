import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  nums: string;
  text: string;
  className?: string;
}

export const AboutCard: FC<Props> = ({ className, nums, text }) => {
  return (
    <article
      className={cn(
        "px-6 py-4 relative bg-bg_surface_container h-[160px] w-full overflow-hidden",
        className
      )}
    >
      <img src="/bg-logo.svg" className="absolute top-2 right-0" />
      <h2 className="text-primary text-[32px] semibold leading-[130%] mb-4">
        {nums}
      </h2>

      <h4 className="text-on_surface normal text-base">{text}</h4>
    </article>
  );
};
