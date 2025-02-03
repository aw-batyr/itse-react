import { cn } from "@/lib/utils";
import { FC } from "react";
import { ContactCard, Container, TimeCard } from "../";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslate } from "@/hooks/use-translate";
import { Language, useLangStore } from "@/store/lang";
import { times } from "@/data/home-time.data";
import { contacts } from "@/data/contacts.data";

interface Props {
  className?: string;
}

export const HomeTime: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section className={cn("bg-surface_high pt-10 pb-20", className)}>
      <Container>
        <h2 className="h2 mb-10">{times[useTranslate(lang)].title}</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {times[useTranslate(lang)].data.map((item) => (
              <TimeCard {...item} key={item.name} className="w-full" />
            ))}
          </div>

          <div className="md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6">
            {contacts[useTranslate(lang)].data.map((item) => (
              <ContactCard {...item} key={item.title} className="w-full" />
            ))}
          </div>

          <Link to="/stend-form" className="md:w-fit w-full mx-auto">
            <Button className="w-full">
              {lang === Language.RU ? "Забронируйте стенд" : "Book a stand"}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
