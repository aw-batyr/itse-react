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
import { useLangStore } from "@/store/lang";
import { Menu } from "./menu";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/locales/types/nav.type";
import { useUiStore } from "@/store/ui";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const { t } = useTranslation("nav");
  const lang = useLangStore((state) => state.lang);

  const nav = t("navigation", { returnObjects: true }) as Navigation[];

  const sheet = useUiStore((state) => state.sheet);
  const setSheet = useUiStore((state) => state.setSheet);

  return (
    <Sheet onOpenChange={() => setSheet(!sheet)} open={sheet}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-on_secondary_container rounded-[2px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto ">
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

          <Link to="/B2B-B2G" onClick={() => setSheet(false)}>
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

        <div className="flex flex-col gap-6 relative">
          {nav.map((item) =>
            !item.drop ? (
              <Link
                target={item.blank ?? ""}
                className="py-2"
                key={item.title}
                to={item.link || ""}
                onClick={() => setSheet(false)}
              >
                {item.title}
              </Link>
            ) : (
              <Menu
                className="w-full"
                triggerClassName="justify-between"
                key={item.title}
                color={"black"}
                dropDownContent={item.dropDownContent}
                title={item.title}
              />
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
