import { FC, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollLock } from "usehooks-ts";
import { usePhotos } from "@/hooks/tanstack/use-photos";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
  activeItem: number; // индекс активного слайда
  className?: string;
}

export const MediaModal: FC<Props> = ({ className, setIsOpen, activeItem }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const { data } = usePhotos(1);

  useScrollLock(); // блокируем скролл body

  useEffect(() => {
    if (!emblaApi || !data) return;

    // Прокручиваем до активного слайда без анимации
    emblaApi.scrollTo(activeItem, true); // skipSnaps: true - пропускаем анимацию

    return () => {
      emblaApi.off("select", () => {}); // очищаем события при размонтировании компонента
    };
  }, [emblaApi, data, activeItem]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed z-[100] top-0 left-0 pb-40 pt-28 px-28 overflow-hidden min-h-screen w-full bg-black/90",
        className
      )}
    >
      <X
        onClick={() => setIsOpen(false)}
        className="absolute top-10 right-10 p-3 size-20 cursor-pointer z-50 text-white hover:scale-110 transition-all duration-300"
      />

      <ChevronLeftIcon
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-10 top-1/2 -translate-y-1/2 text-white size-20 cursor-pointer hover:scale-110 transition-all duration-300 z-40"
      />
      <ChevronRightIcon
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-10 top-1/2 -translate-y-1/2 text-white size-20 cursor-pointer hover:scale-110 transition-all duration-300 z-40"
      />

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex">
          {data?.map((item) => (
            <div
              key={item.id}
              className="embla__slide flex-[0_0_100%] max-h-[700px] flex items-center justify-center"
            >
              <img
                src={item?.photo?.path}
                alt={item.photo.file_name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
