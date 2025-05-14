import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container, Loader } from "../";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaPartners } from "@/hooks/tanstack/use-media-partners";

interface Props {
  className?: string;
}

export const MediaPartners: FC<Props> = ({ className }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: true,
      duration: 40,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const { t } = useTranslation("home");

  const { data, isPending } = useMediaPartners();

  const { title } = t("mediaPartners", { returnObjects: true }) as {
    title: string;
  };

  if (isPending) return <Loading />;

  return (
    <section className={cn("", className)}>
      <Container className="flex flex-col gap-10 relative w-full">
        <div className="flex item-center justify-between">
          <h2 className="h2">{title}</h2>
        </div>

        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container flex">
            {data?.map((partner, i) =>
              !partner.link ? (
                <div
                  key={i}
                  className="bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full"
                >
                  <img
                    src={partner?.image?.path}
                    alt={partner?.name}
                    className="size-full object-contain"
                  />
                </div>
              ) : (
                <Link
                  key={i}
                  to={partner.link}
                  className="bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full"
                >
                  <img
                    src={partner?.image?.path}
                    alt={partner?.name}
                    className="size-full object-contain"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
