import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron, Modal } from "./";
import { Link } from "react-router-dom";
import { DropDownContent } from "@/locales/types/nav.type";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui";

interface Props {
  triggerClassName?: string;
  className?: string;
  title: string;
  color?: string;

  dropDownContent?: DropDownContent[];
}

export const Menu: FC<Props> = ({
  title,
  dropDownContent,
  className,
  color,
  triggerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const setSheet = useUiStore((state) => state.setSheet);

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        className={cn("flex items-center gap-2", triggerClassName)}
      >
        {title}
        <Chevron
          color={color}
          className={cn("transition-all duration-200", isOpen && "rotate-180")}
        />
      </PopoverTrigger>

      <PopoverContent
        className={cn("w-fit px-0 py-2 cursor-pointer bg-slate-100", className)}
      >
        {dropDownContent &&
          dropDownContent.map((item) =>
            item.link ? (
              <Link
                onClick={() => {
                  setIsOpen(false);
                  setSheet(false);
                }}
                className="h-14 px-3 text-on_surface flex gap-3 items-center hover:bg-slate-300/50 transition-all"
                key={item.text}
                target={item.blank ? "_blank" : ""}
                to={item.link}
              >
                {item.text}
                {item.blank && <img src="/pdf.svg" />}
              </Link>
            ) : item.modal ? (
              <Modal key={item.text} title={item.text} />
            ) : (
              <div
                key={item.text}
                className="h-14 px-3 text-on_surface flex items-center hover:bg-slate-300/50 transition-all"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.text}
              </div>
            )
          )}
      </PopoverContent>
    </Popover>
  );
};
