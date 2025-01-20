import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("h-16 w-[184px]", className)}>
      <img src="/logo.svg" alt="logo" className="size-full object-contain" />
    </div>
  );
};
