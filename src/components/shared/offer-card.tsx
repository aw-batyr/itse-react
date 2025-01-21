import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const OfferCard: FC<Props> = ({ className, title, text }) => {
  return (
    <article className={cn("px-6 py-8 relative", className)}>
      <div className="absolute top-0 left-0 bg-gradient-to-r bg-[#2C57A7] from-[#2C57A7] to-[#2C57A7]/20" />

      <h4 className="text-4xl">{title}</h4>
      <p>{text}</p>
    </article>
  );
};
