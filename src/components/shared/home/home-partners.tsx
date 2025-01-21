import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const HomePartners: FC<Props> = ({ className }) => {
  return <section className={cn("", className)}></section>;
};
