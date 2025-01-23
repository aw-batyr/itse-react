import { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Props {
  className?: string;
}

export const LangMenu: FC<Props> = () => {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <img src="/ru.svg" alt="" />
        Ру
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.23008 8.01443C4.35907 7.70304 4.66293 7.5 4.99998 7.5H15C15.337 7.5 15.6409 7.70304 15.7699 8.01443C15.8989 8.32583 15.8276 8.68426 15.5892 8.92259L10.5892 13.9226C10.2638 14.248 9.73617 14.248 9.41073 13.9226L4.41073 8.92259C4.1724 8.68426 4.1011 8.32583 4.23008 8.01443ZM7.01183 9.16667L9.99998 12.1548L12.9881 9.16667H7.01183Z"
            fill="#fff"
          />
        </svg>
      </PopoverTrigger>

      <PopoverContent></PopoverContent>
    </Popover>
  );
};
