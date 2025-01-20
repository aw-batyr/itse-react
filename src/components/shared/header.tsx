import { FC } from "react";
import { Container, Logo } from "./";
import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const navData = [
  {
    title: "План выставки",
    link: "",
  },
  {
    title: "Медиа",
    link: "",
  },
  {
    title: "Контакты",
    link: "",
  },
];

export const navData2 = [
  {
    title: "О выставке",
    link: "",
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
      <div className="h-12 bg-primary text-on_primary flex items-center overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="flex-[0_1_566px] gap-4 flex items-center justify-between">
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
          </div>
        </Container>
      </div>

      <div className="bg-white py-2 flex items-center justify-between h-20 overflow-hidden">
        <Container className="flex items-center justify-between ">
          <div className="flex items-center justify-between flex-[0_1_660px]">
            <Logo />

            <nav className="flex items-center gap-6">
              {navData2.map(({ title, link }) => (
                <Link key={title} to={link}>
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <Button variant={"secondary"} size={"sm"}>
              Забронируйте стенд
            </Button>
            <Button size={"sm"}>B2B | B2G</Button>
          </div>
        </Container>
      </div>
    </header>
  );
};
