import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const AboutBron: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn("md:py-20 py-10 relative overflow-hidden", className)}
    >
      <img
        src="/CTA.png"
        className="absolute top-0 left-0 size-full -z-10 object-cover"
      />

      <Container>
        <h3 className="h2 text-center !text-on_primary mb-6">
          Приглашение к участию
        </h3>
        <p className="text-center md:text-lg text-sm  text-primary_04 max-w-[808px] mx-auto mb-10">
          Торгово-промышленная палата Туркменистана приглашает бизнес-сообщество
          со всего мира присоединиться к этому уникальному событию, которое
          станет важным шагом к укреплению позиций Туркменистана на глобальной
          экономической арене.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to={"/stend-form"} className="w-full">
            <Button className="bg-white w-full text-primary hover:bg-white/90">
              Забронировать стенд
            </Button>
          </Link>
          <Link to={"/B2B-B2G"} className="w-full">
            <Button className="bg-white w-full hover:bg-white/90 text-primary">
              B2B | B2G встречи
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
