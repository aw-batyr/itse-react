import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../container";

interface Props {
  className?: string;
}

export const AboutPlace: FC<Props> = ({ className }) => {
  return (
    <section className={cn(" gap-6 relative overflow-hidden", className)}>
      <Container className="md:py-20 py-10 ">
        <h3 className="h2 mb-6 xl:max-w-[496px]">Место проведения</h3>
        <p className="text-lg text-on_surface_v normal xl:max-w-[496px] mb-10">
          Торгово-промышленная палата Туркменистана создана в целях содействия
          развитию экономики Туркменистана, ее интегрированию в мировую
          хозяйственную систему, формированию современной промышленной,
          финансовой и торговой инфраструктуры, создания благоприятных условий
          для предпринимательской деятельности, оказания содействия в
          установлении торгово-экономических, научных и технических связей с
          зарубежными партнерами.
        </p>

        <div className="size-full xl:hidden">
          <img src="/map.png" alt="map" className="size-full object-cover" />
        </div>
      </Container>

      <div className="h-full 2xl:w-[850px] xl:w-[650px] xl:block hidden absolute top-0 right-0">
        <img src="/map.png" alt="" className="size-full object-cover" />
      </div>
    </section>
  );
};
