import { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Props {
  className?: string;
}

export const LangMenu: FC<Props> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild></PopoverTrigger>

      <PopoverContent></PopoverContent>
    </Popover>
  );
};
