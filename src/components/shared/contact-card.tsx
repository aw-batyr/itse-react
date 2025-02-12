import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  info: string;
  title: string;
  image: { path: string };
}

export const ContactCard: FC<Props> = ({ className, info, title, image }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <img src={image?.path} alt="contact icon" />

      <div className="flex flex-col gap-2">
        <h5 className="text-sm text-[#454545]">{title}</h5>
        <h4 className="text-[#171717] semibold">{info}</h4>
      </div>
    </div>
  );
};
