import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  name: string;
  date: string;
  bottomClassName?: string;
}

export const TimeCard: FC<Props> = ({
  className,
  name,
  date,
  bottomClassName,
}) => {
  return (
    <div className={cn("rounded-t-[4px] overflow-hidden", className)}>
      <div className="bg-teritary_07 flex items-center text-teritary_11 h-11 px-4">
        {name}
      </div>

      <div
        className={cn(
          "h-14 bg-bg_surface_container semibold flex items-center text-lg px-4",
          bottomClassName
        )}
      >
        {date}
      </div>
    </div>
  );
};
