import { FC } from "react";
import { Container, LangMenu, Logo } from "./";
import { ArrowUpRight, MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Burger } from "./burger";
import { navData, navData2 } from "@/data/header.data";
import { useLangStore } from "@/store/lang";
import { useTranslate } from "@/hooks/use-translate";

export const Header: FC = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <header>
      <div className="h-12 hidden lg:flex bg-primary text-on_primary items-center overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">
                {lang === "ru"
                  ? "Ашхабад, Туркменистан"
                  : "Ashgabat, Turkmenistan"}
              </h4>
            </div>

            <nav className="flex items-center gap-6">
              {navData[useTranslate(lang)].data.map((item) => (
                <Link className="py-2" key={item.title} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} strokeWidth="3px" />
              <h4 className="text-sm">+99371871814</h4>
            </div>

            <LangMenu />
          </div>
        </Container>
      </div>

      <div className="bg-white py-2 flex items-center justify-between h-20 overflow-hidden">
        <Container className="flex items-center justify-between ">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>

            <nav className="lg:flex hidden items-center gap-6">
              {navData2[useTranslate(lang)].data.map(({ title, link }) => (
                <Link key={title} to={link} className="flex items-center gap-2">
                  {title} <img src="/chevron.svg" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <LangMenu className="lg:hidden" />
            <Burger />
          </div>

          <div className="lg:flex hidden items-center gap-2">
            <Link to="https://qacis.turkmenexpo.com/" target="_blank">
              <Button variant="outline" size={"sm"}>
                QACIS 2025
                <ArrowUpRight />
              </Button>
            </Link>

            <Link
              target="_blank"
              to={
                lang === "ru"
                  ? "https://itse.turkmenexpo.com/app/storage/app/media/official_support/ru.jpg"
                  : "https://itse.turkmenexpo.com/app/storage/app/media/official_support/en.jpg"
              }
            >
              <Button
                variant={"secondary"}
                size={"sm"}
                className="bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90"
              >
                {lang === "ru" ? "Официальная поддержка" : "Official Support"}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};
