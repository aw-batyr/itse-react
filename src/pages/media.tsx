import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import {
  Container,
  Cover,
  Loading,
  MediaModal,
  Tabs,
} from "@/components/shared";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { usePhotos } from "@/hooks/tanstack/use-photos";
import { useVideos } from "@/hooks/tanstack/use-videos";
import { Play } from "lucide-react";
import { useLang } from "@/hooks/use-lang";

interface Props {
  className?: string;
}

const momentsTabs = [
  {
    id: 0,
    title: "Фото",
    titleEn: "Photo",
  },
  {
    id: 1,
    title: "Видео",
    titleEn: "Video",
  },
];

export const Media: FC<Props> = ({ className }) => {
  const [state, setState] = useState(0);
  const { data, isPending } = usePhotos();
  const { data: videos } = useVideos(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({ id: 0, type: "photo" });

  const lang = useLangStore((state) => state.lang);

  const showAll = lang === "en" ? "Show all" : "Показать все";
  const gala = useLang("Gala ужин", "Gala dinner");

  const onItem = ({ id, type }: { id: number; type: string }) => {
    setIsModalOpen(true);
    setActiveItem({ id, type });
  };

  const [isCollapse, setIsCollapse] = useState(false);

  const firstBlock = data?.filter(
    (item) => item?.category_photo_media_id === 1
  );
  const secondBlock = data?.filter(
    (item) => item?.category_photo_media_id === 2
  );

  console.log(data);

  const firstBlockLength = firstBlock?.length ? firstBlock.length : 0;

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <MediaModal
            photoData={data}
            videoData={videos}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            setIsOpen={setIsModalOpen}
          />
        )}
      </AnimatePresence>

      <section className={cn("", className)}>
        <Cover title={lang === "ru" ? "Моменты ITSE" : "Moments ITSE"} />

        <Container className="page-bottom md:pt-10 pt-6">
          {isPending ? (
            <Loading />
          ) : (
            <div className="flex justify-center flex-col">
              <Tabs
                state={state}
                setState={setState}
                data={momentsTabs}
                className="mb-6"
              />
              <h3 className="md:text-3xl text-2xl mb-6">2025 ITSE</h3>
              <div className="grid lg:grid-cols-4 lg:gap-y-4 lg:gap-x-6 md:gap-6 gap-4 grid-cols-2 place-items-center">
                {state === 0
                  ? firstBlock
                      ?.slice(0, isCollapse ? 300 : 16)
                      ?.map((photo, i) => (
                        <div
                          onClick={() => onItem({ id: i, type: "photo" })}
                          key={i}
                          className="cursor-pointer embla__slide basis-1/1 h-48 w-full overflow-hidden"
                        >
                          <img
                            src={photo?.photo?.path ?? ""}
                            alt={photo?.photo?.file_name ?? "photo"}
                            className="size-full object-cover hover:scale-105 duration-300 transition-all"
                          />
                        </div>
                      ))
                  : videos?.videos?.map((video, i) => (
                      <div
                        onClick={() => onItem({ id: i, type: "video" })}
                        key={i}
                        className="cursor-pointer group embla__slide basis-1/1 h-48 w-full overflow-hidden relative"
                      >
                        <Play
                          fill="white"
                          size={20}
                          color="white"
                          className="absolute group-hover:scale-125 transition-all duration-300 top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                        />
                        <div className="absolute top-0 left-0 size-full bg-[#2C57A752]/[32%]" />
                        <img
                          src={video?.video_photo?.path ?? ""}
                          className="size-full object-cover"
                        />
                      </div>
                    ))}
              </div>

              {state === 0 && data && data?.length > 16 && !isCollapse && (
                <Button
                  onClick={() => setIsCollapse(true)}
                  className="mx-auto w-[288px] mt-10 text-on_surface"
                  size={"lg"}
                  variant={"outline"}
                >
                  {showAll}
                </Button>
              )}

              {state === 0 && isCollapse && (
                <>
                  <h3 className="md:text-3xl mt-10 text-2xl mb-6">{gala}</h3>
                  <div className="grid lg:grid-cols-4 lg:gap-y-4 lg:gap-x-6 md:gap-6 gap-4 grid-cols-2 place-items-center">
                    {state === 0 &&
                      secondBlock?.map((photo, i) => (
                        <div
                          onClick={() =>
                            onItem({
                              id: i + firstBlockLength,
                              type: "photo",
                            })
                          }
                          key={i}
                          className="cursor-pointer embla__slide basis-1/1 h-48 w-full overflow-hidden"
                        >
                          <img
                            src={photo?.photo?.path ?? ""}
                            alt={photo?.photo?.file_name ?? "photo"}
                            className="size-full object-cover hover:scale-105 duration-300 transition-all"
                          />
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
