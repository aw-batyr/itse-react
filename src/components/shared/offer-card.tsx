import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  text: string;
  className?: string;
  img: string;
}

export const OfferCard: FC<Props> = ({ className, title, text, img }) => {
  return (
    <article
      className={cn(
        "md:px-8 md:py-6 p-4 relative overflow-hidden h-[296px] md:w-full w-[300px] text-on_primary",
        className
      )}
    >
      <div className="absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-[#2C57A7] to-[#2C57A7]/20 " />
      <img
        src={img}
        className="absolute size-full top-0 right-0 object-cover"
      />

      <div className="relative z-20">
        <h4 className="md:text-2xl text-lg mb-4 max-w-[444px] z-20 h-16">
          {title}
        </h4>
        <p className="md:text-base text-sm normal max-w-[360px] z-20">{text}</p>

        <Button className="text-sm px-0 mt-4 py-1.5 z-20" variant={"link"}>
          Скачать PDF <ArrowUpRight />
        </Button>
      </div>
    </article>
  );
};
