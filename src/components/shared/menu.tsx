import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron, Modal } from "./";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  title: string;
  color?: string;

  onMenu?: VoidFunction;

  dropDownContent?: {
    modal?: boolean;
    text: string;
    link?: string;
    blank?: boolean;
  }[];
}

export const Menu: FC<Props> = ({ title, dropDownContent, color, onMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger className="flex items-center gap-2">
        {title}
        <Chevron color={color} />
      </PopoverTrigger>

      <PopoverContent className="w-fit px-0 py-2 cursor-pointer bg-slate-100">
        {dropDownContent &&
          dropDownContent.map((item) =>
            item.link ? (
              <Link
                onClick={() => setIsOpen(false)}
                className="h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all"
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
                className="h-14 px-3 flex items-center hover:bg-slate-300/50 transition-all"
                onClick={() => {
                  setIsOpen(false);
                  onMenu?.();
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
