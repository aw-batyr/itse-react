import {
  AboutBron,
  AboutPlace,
  AboutThemes,
  AboutTime,
  Container,
} from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const About: FC<Props> = ({ className }) => {
  useScrollTop();

  return (
    <div className={cn("", className)}>
      <div className="relative flex items-center h-[216px] w-full justify-center ">
        <img
          src="/b2b-cover.png"
          className="-z-10 absolute size-full object-cover top-0 left-0"
        />
        <h1 className="text-on_primary text-5xl">О выставке</h1>
      </div>

      <Container className="flex flex-col my-20 gap-16">
        <div className="flex flex-col gap-6">
          <h3 className="h2">InternatiInternational Trade & Services Expo</h3>
          <p className="text-18">
            Международная выставка-ярмарка «Торговля и услуги» в Ашхабаде: новые
            возможности для бизнеса С 29 апреля по 1 мая 2025 года столица
            Туркменистана, Ашхабад, станет центром международного делового
            сообщества благодаря крупнейшей выставке-ярмарке «Торговля и
            услуги». Организованная Торгово-промышленной палатой Туркменистана и
            компанией Turkmen Expo, эта выставка направлена на укрепление
            глобальных торговых связей, привлечение инвестиций и демонстрацию
            экономического потенциала страны.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="h2">InternatiInternational Trade & Services Expo</h3>
          <p className="text-18">
            Международная выставка-ярмарка «Торговля и услуги» в Ашхабаде: новые
            возможности для бизнеса С 29 апреля по 1 мая 2025 года столица
            Туркменистана, Ашхабад, станет центром международного делового
            сообщества благодаря крупнейшей выставке-ярмарке «Торговля и
            услуги». Организованная Торгово-промышленной палатой Туркменистана и
            компанией Turkmen Expo, эта выставка направлена на укрепление
            глобальных торговых связей, привлечение инвестиций и демонстрацию
            экономического потенциала страны.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="h2">Цели выставки</h3>

          <ul className="list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal">
            <li>
              Поддержка малых и средних предприятий, их интеграция в
              международную экономику.
            </li>
            <li>Продвижение экспортного потенциала Туркменистана.</li>
            <li>Укрепление деловых связей через B2B- и B2G-встречи.</li>
            <li>Привлечение инвестиций в ключевые секторы экономики.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="h2">Ключевые особенности мероприятия</h3>
          <ul className="list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal">
            <li>Специализированные выставочные зоны </li>
            <li>Форумы по качеству продукции</li>
            <li>Воркшопы и бизнес-миссии</li>
          </ul>

          <p className="text-18">
            Участники смогут обсудить современные технологии, лучшие практики и
            эффективные стратегии для устойчивого бизнеса.
          </p>
        </div>
      </Container>

      <AboutThemes />
      <AboutTime />
      <AboutPlace />
      <AboutBron />
    </div>
  );
};
