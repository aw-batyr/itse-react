import { FC } from "react";
import { Container, LangMenu, Logo } from "./";
import { ArrowUpRight, MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const navData = [
  {
    title: "Медиа",
    link: "",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
];

export const navData2 = [
  {
    title: "О выставке",
    link: "/about",
  },
  {
    title: "Посетителям",
    link: "",
  },
  {
    title: "Экспонентам",
    link: "",
  },
];

export const Header: FC = () => {
  return (
    <header className="">
      <div className="h-12 hidden lg:flex bg-primary text-on_primary items-center overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">Ашхабад, Туркменистан</h4>
            </div>

            <nav className="flex items-center gap-6">
              {navData.map(({ title, link }) => (
                <Link className="py-2" key={title} to={link}>
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} strokeWidth="3px" />
              <h4 className="text-sm">+993(62) 00-62-00</h4>
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
              {navData2.map(({ title, link }) => (
                <Link key={title} to={link} className="flex items-center gap-2">
                  {title} <img src="/chevron.svg" />
                </Link>
              ))}
            </nav>
          </div>

          <LangMenu className="lg:hidden" />

          <div className="lg:flex hidden items-center gap-2 ">
            <Button variant="outline" size={"sm"}>
              QACIS 2025
              <ArrowUpRight />
            </Button>

            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-[#FFAE2A] text-on_teritary hover:bg-[#FFAE2A]/90"
            >
              Официальная поддержка
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};
