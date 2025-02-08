import { FC, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { burgerData } from "@/data/burger.data";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const lang = useLangStore((state) => state.lang);

  return (
    <Sheet onOpenChange={() => setOpen(!open)} open={open}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetClose />

        <SheetHeader className="mt-16 flex flex-col gap-2">
          <Link to="https://qacis.turkmenexpo.com/" target="_blank">
            <Button variant="outline" className="w-full" size={"sm"}>
              QACIS 2025
              <ArrowUpRight />
            </Button>
          </Link>

          <Link
            to={
              lang === "ru"
                ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg"
            }
          >
            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-[#FFAE2A] w-full text-on_teritary hover:bg-[#FFAE2A]/90"
            >
              {lang === "ru" ? "Официальная поддержка" : "Official Support"}
            </Button>
          </Link>

          <Link to="/B2B-B2G" onClick={() => setOpen(false)}>
            <Button
              className="text-base w-full"
              variant={"teritary"}
              size={"sm"}
            >
              {lang === "ru" ? "B2B | B2G встречи" : "B2B | B2G meetings"}
            </Button>
          </Link>
        </SheetHeader>
        <hr className="border-slate-500/20 my-8" />

        <div className="flex flex-col gap-6">
          {burgerData[useTranslate(lang)].data.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              className="h-10 text-on_surface "
              key={item.title}
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
