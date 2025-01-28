import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../container";
import { times } from "../home/home-time";
import { TimeCard } from "../time-card";

interface Props {
  className?: string;
}

export const AboutTime: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn("bg-bg_surface_container py-10 md:py-[160px]", className)}
    >
      <Container>
        <h3 className="h2 mb-6">Время выставки</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {times.map((item) => (
            <TimeCard
              bottomClassName="!bg-white rounded-b-[2px]"
              {...item}
              key={item.name}
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
