import { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
  className?: string;
  triggerValue?: string;
  triggerClassName?: string;
  activeTitle: {
    name?: string;
    id?: number;
  };
  setActiveTitle: (item: { name: string; id: number }) => void;
  data: {
    name: string;
    id: number;
  }[];
}

export const TitleDropdown: FC<Props> = ({
  className,
  data,
  triggerClassName,
  activeTitle,
  setActiveTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className={cn("relative w-fit", className)} ref={ref}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 cursor-pointer",
          triggerClassName,
          data.length === 1 && "pointer-events-none"
        )}
      >
        <h3>{!activeTitle ? data[0]?.name : activeTitle?.name}</h3>
        {data?.length !== 1 && (
          <img
            src="/chevron.svg"
            alt="chevron"
            className={cn("transition-all", isOpen ? "rotate-180" : "rotate-0")}
          />
        )}
      </div>

      <motion.div
        initial={{ y: -5, opacity: 0, pointerEvents: "none" }}
        animate={
          isOpen
            ? { opacity: 1, pointerEvents: "all", y: 0 }
            : { pointerEvents: "none" }
        }
        className="bg-surface_container absolute top-10 left-0 z-50 shadow-lg py-2 rounded-[2px] max-h-[500px] overflow-y-auto"
      >
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setActiveTitle({ ...item });
              setIsOpen(false);
            }}
            className="cursor-pointer text-base py-4 hover:bg-on_surface/[8%] transition-all px-4"
          >
            {item?.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
