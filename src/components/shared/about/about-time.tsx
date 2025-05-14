import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../../layout/container";

import { TimeCard } from "../time-card";
import { times } from "@/data/home/home-time.data";
import { useLangStore } from "@/store/lang";
import { useTranslate } from "@/hooks/use-translate";
import { useExhibitionTime } from "@/hooks/tanstack/use-exhibition-time";
import { Loading } from "../";

interface Props {
  className?: string;
}

export const AboutTime: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useExhibitionTime();

  return (
    <section
      className={cn("bg-bg_surface_container py-10 md:py-[80px]", className)}
    >
      <Container>
        {isPending ? (
          <Loading />
        ) : (
          <>
            <h2 className="h2 mb-6">{times[useTranslate(lang)].title}</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {data?.map((item, i) => (
                <TimeCard
                  bottomClassName="!bg-white rounded-b-[2px]"
                  {...item}
                  key={i}
                  className="w-full"
                />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
