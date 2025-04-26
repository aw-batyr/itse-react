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
        className={cn(
          "max-w-[250px] min-w-[160px] px-0 py-2 cursor-pointer bg-slate-100",
          className
        )}
      >
        {dropDownContent &&
          dropDownContent.map((item) => {
            const isFileLink = /\.(xlsx|xls|docx|doc)$/i.test(item.link || "");

            if (item.link) {
              return isFileLink ? (
                // Для файлов: <a download> вместо <Link>
                <a
                  key={item.text}
                  href={item.link}
                  download
                  className="py-4 px-3 text-on_surface flex gap-3 items-center hover:bg-slate-300/50 transition-all"
                  onClick={() => {
                    setIsOpen(false);
                    setSheet(false);
                  }}
                >
                  {item.text}
                  {item.pdf && <img src="/pdf.svg" />}
                </a>
              ) : (
                // Обычные ссылки остаются через рутер
                <Link
                  key={item.text}
                  to={item.link}
                  target={item.blank || item.pdf ? "_blank" : undefined}
                  className="py-4 px-3 text-on_surface flex gap-3 items-center hover:bg-slate-300/50 transition-all"
                  onClick={() => {
                    setIsOpen(false);
                    setSheet(false);
                  }}
                >
                  {item.text}
                  {item.pdf && <img src="/pdf.svg" />}
                </Link>
              );
            }

            // остальной код без изменений...
            return item.modal ? (
              <Modal key={item.text} title={item.text} />
            ) : (
              <div
                key={item.text}
                className="h-14 px-3 text-on_surface flex items-center hover:bg-slate-300/50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </div>
            );
          })}
      </PopoverContent>
    </Popover>
  );
};
