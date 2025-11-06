import { FC } from "react";
import { Container, LangMenu, Logo, Menu } from "../shared";
import { ArrowUpRight, MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Burger } from "../shared/burger";
import { useLangStore } from "@/store/lang";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/locales/types/nav.type";

export const Header: FC = () => {
  const lang = useLangStore((state) => state.lang);

  const { t } = useTranslation("nav");

  const nav = t("navigation", { returnObjects: true }) as Navigation[];

  return (
    <div className="h-20 lg:h-[128px]">
      <header className="fixed top-0 left-0 right-0 z-[100]">
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
                {nav.slice(0, 3).map((item) =>
                  !item.drop ? (
                    <Link
                      target={item.blank ?? ""}
                      className="py-2"
                      key={item.title}
                      to={item.link || ""}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <Menu
                      key={item.title}
                      color={"white"}
                      dropDownContent={item.dropDownContent}
                      title={item.title}
                    />
                  )
                )}
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
                <Logo className="md:h-full h-24 w-auto py-5" />
              </Link>

              <nav className="lg:flex hidden items-center gap-6">
                {nav.slice(3, 6).map((item) =>
                  !item.drop ? (
                    <Link
                      className="py-2"
                      key={item.title}
                      to={item.link || ""}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <Menu
                      triggerClassName="justify-between"
                      key={item.title}
                      dropDownContent={item.dropDownContent}
                      title={item.title}
                      color="black"
                    />
                  )
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <LangMenu chevronColor="black" className="lg:hidden" />
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
    </div>
  );
};
