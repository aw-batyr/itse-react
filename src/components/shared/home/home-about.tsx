import { FC } from "react";
import { AboutCard, Container } from "../";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HomeAbout: FC = () => {
  return (
    <section>
      <Container className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="h2 mb-3">
            Выставка-ярмарка «Международная Торговля и Услуги» в Ашхабаде
          </h2>
          <p className="text-base normal text-[#454545]">
            С 29 апреля по 1 мая 2025 года столица Туркменистана, Ашхабад,
            станет центром международного делового сообщества благодаря
            крупнейшей выставке-ярмарке «Торговля и услуги». Организованная
            Торгово-промышленной палатой Туркменистана и компанией Turkmen Expo,
            эта выставка направлена на укрепление глобальных торговых связей,
            привлечение инвестиций и демонстрацию экономического потенциала
            страны.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <AboutCard nums="4,200 m²" text="выставочной площади" />
          <AboutCard nums="10000+" text="Посетители посетят выставку" />
          <AboutCard nums="100+" text="Экспоненты из более чем 30 стран" />
          <AboutCard
            nums="80%"
            text="Участники принимают участие в принятии решений о закупках"
          />
        </div>
        <Link to="/about" className="mx-auto">
          <Button variant={"outline"}>Подробнее о выставке</Button>
        </Link>
      </Container>
    </section>
  );
};
