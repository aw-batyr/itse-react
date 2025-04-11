import { FC, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  className?: string;
}

const tabs = [
  { id: 0, title: "Все участники" },
  {
    id: 1,
    title: "Туркменские компании",
  },
  {
    id: 2,
    title: "Иностранные компании",
  },
];

export const Tabs: FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = useMediaQuery("(min-width: 550px)");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    skipSnaps: false,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setActiveTab(index);
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Обновление позиции индикатора
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  // Обработчик клика по табу
  const handleTabClick = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setActiveTab(index); // Для немедленного обновления состояния
      }
    },
    [emblaApi]
  );
  return (
    <div
      role="tablist"
      ref={!tab ? emblaRef : null}
      className={cn("w-[506px] mx-auto embla relative", className)}
    >
      <div className="embla__container flex w-full">
        {tabs.map((tab, index) => (
          <button
            ref={(el) => (tabRefs.current[index] = el)}
            key={tab.id}
            role="tab"
            className={cn(
              "embla__slide text-center h-12  mx-4 py-2 md:text-xs text-sm w-fit transition-all",
              activeTab === tab.id ? "text-primary" : "text-on_surface_v"
            )}
            onClick={() => (!tab ? handleTabClick(index) : setActiveTab(index))}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className="absolute bottom-0 h-[3px] rounded-t-[2px] bg-primary transition-all duration-200"
        style={indicatorStyle}
      />
    </div>
  );
};
