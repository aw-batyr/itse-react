import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { Container, Cover, Loader, MediaModal } from "@/components/shared";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { usePhotos } from "@/hooks/tanstack/use-photos";

interface Props {
  className?: string;
}

// const momentsTabs = [
//   {
//     id: 0,
//     title: "Фото",
//     titleEn: "Видео",
//   },
//   {
//     id: 1,
//     title: "Photo",
//     titleEn: "Video",
//   },
// ];

export const Media: FC<Props> = ({ className }) => {
  // const [state, setState] = useState(0);
  const { data, isPending } = usePhotos(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const lang = useLangStore((state) => state.lang);

  const onItem = (id: number) => {
    setIsModalOpen(true);
    setActiveItem(id);
  };

  const { t } = useTranslation("main");

  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <MediaModal activeItem={activeItem} setIsOpen={setIsModalOpen} />
        )}
      </AnimatePresence>

      <section className={cn("", className)}>
        <Cover title={lang === "ru" ? "Моменты ITSE" : "Moments ITSE"} />

        <Container className="page-padding">
          {isPending ? (
            <Loader />
          ) : (
            <div className="flex justify-center flex-col">
              {/* <Tabs
              state={state}
              setState={setState}
              data={momentsTabs}
              className="mb-6"
              /> */}
              <h3 className="text-3xl mb-6">2025 ITSE</h3>
              <div className="grid lg:grid-cols-4 lg:gap-y-4 lg:gap-x-6 md:gap-6 gap-4 grid-cols-2 place-items-center">
                {data?.slice(0, isCollapse ? 1000 : 16)?.map((photo, i) => (
                  <div
                    onClick={() => onItem(i)}
                    key={i}
                    className="cursor-pointer embla__slide basis-1/1"
                  >
                    <img
                      src={photo?.photo?.path ?? ""}
                      alt={photo?.photo?.file_name ?? "photo"}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {data?.length && data.length > 16 && !isCollapse && (
                <Button
                  onClick={() => setIsCollapse(true)}
                  className="mx-auto w-[288px] mt-10 text-on_surface"
                  size={"lg"}
                  variant={"outline"}
                >
                  {t("media.button")}
                </Button>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
