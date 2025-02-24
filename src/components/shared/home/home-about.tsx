import { FC } from "react";
import { AboutCard, Container, Loader } from "../";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useLangStore } from "@/store/lang";
import { homeAbout } from "@/data/home/home-about.data";
import { useTranslate } from "@/hooks/use-translate";
import { useStaticWords } from "@/hooks/tanstack/use-static-words";
import { useStats } from "@/hooks/tanstack/use-stats";

export const HomeAbout: FC = () => {
  const [ebmblaRef] = useEmblaCarousel();
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useStaticWords("1");

  const title = data?.find((item) => item.key === "index_1_title")?.text;
  const text = data?.find((item) => item.key === "index_1_description")?.text;

  const { data: stats, isPending: statsLoading } = useStats();

  if (isPending) return <Loader />;

  return (
    <section>
      <Container className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="h2 text-left">{title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: text ? text : "" }}
              className="md:text-base flex flex-col gap-6 text-sm normal text-left text-[#454545]"
            />

            <Link to="/about" className="w-fit">
              <Button variant={"outline"}>
                {homeAbout[useTranslate(lang)].mainData[0].button}
              </Button>
            </Link>
          </div>

          <video
            src="https://itse.turkmenexpo.com/app/storage/app/media/video/itse2025.mp4"
            muted
            controls
            autoPlay
            loop
            className="w-full h-auto"
          />
        </div>

        <div ref={ebmblaRef} className="embla overflow-hidden">
          <div className="flex embla__container items-center gap-6">
            {statsLoading ? (
              <Loader />
            ) : (
              stats?.map((item) => (
                <AboutCard
                  key={item.text}
                  {...item}
                  className="embla__slide flex-[0_0_288px]"
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
