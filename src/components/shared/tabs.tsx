import { FC, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "usehooks-ts";
import { useLangStore } from "@/store/lang";

const tabs = [
  { id: 0, title: "Все компании", titleEn: "All companies" },
  {
    id: 3,
    title: "Государственные учреждения ",
    titleEn: "Government Institutions",
  },
  {
    id: 1,
    title: "Местные компании",
    titleEn: "Local companies",
  },
  {
    id: 2,
    title: "Иностранные компании",
    titleEn: "Foreign companies",
  },
];

interface Props {
  className?: string;
  state: number;
  setState: (val: number) => void;
  data?: typeof tabs;
}

export const Tabs: FC<Props> = ({
  className,
  setState,
  state,
  data = tabs,
}) => {
  const lang = useLangStore((state) => state.lang);
  const isDesktop = useMediaQuery("(min-width: 550px)");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    align: "start",
    containScroll: "trimSnaps",
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update indicator position based on active tab
  const updateIndicator = useCallback(() => {
    const activeTabElement = tabRefs.current[state];
    if (!activeTabElement) return;

    if (isDesktop || !emblaApi) {
      // For desktop or before emblaApi initializes
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    } else {
      // For mobile with carousel
      const emblaNode = emblaApi.rootNode();
      const emblaContainer = emblaApi.containerNode();
      if (!emblaNode || !emblaContainer) return;

      // Calculate position based on scroll position
      const scrollLeft = emblaContainer.scrollLeft;
      const tabLeft = activeTabElement.offsetLeft;

      // Set position relative to current scroll
      setIndicatorStyle({
        left: tabLeft - scrollLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [state, isDesktop, emblaApi]);

  // Scroll to active tab when state changes
  useEffect(() => {
    if (!emblaApi) return;

    // Navigate to the selected tab
    emblaApi.scrollTo(state);

    // Update indicator after scrolling
    const scrollTimer = setTimeout(updateIndicator, 300);
    return () => clearTimeout(scrollTimer);
  }, [emblaApi, state, updateIndicator]);

  // Set up event listeners when emblaApi is ready
  useEffect(() => {
    if (!emblaApi) return;

    // Initial indicator update
    updateIndicator();

    // Update indicator on scroll
    emblaApi.on("scroll", updateIndicator);
    // Update indicator after resize
    emblaApi.on("resize", updateIndicator);

    return () => {
      emblaApi.off("scroll", updateIndicator);
      emblaApi.off("resize", updateIndicator);
    };
  }, [emblaApi, updateIndicator]);

  // Handle tab click
  const handleTabClick = useCallback(
    (index: number) => {
      setState(index);
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, setState]
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto", className)}
      style={{ width: "fit-content", maxWidth: "100%" }}
    >
      <div ref={emblaRef} className="embla" role="tablist">
        <div className="flex">
          {data.map((tab, index) => (
            <button
              ref={(el) => (tabRefs.current[index] = el)}
              key={tab.id}
              role="tab"
              aria-selected={state === index}
              className={cn(
                "shrink-0 text-center relative md:after:opacity-0 after:transition-all after:rounded after:w-full after:h-0.5 after:bg-primary after:opacity-0 after:absolute after:bottom-0 after:left-0 h-12 mx-4  py-2 text-sm md:text-base whitespace-nowrap transition-all",
                state === index
                  ? "text-primary transition-all md:after:opacity-0 after:opacity-100"
                  : "text-on_surface_v"
              )}
              onClick={() => handleTabClick(index)}
            >
              {lang === "ru" ? tab.title : tab.titleEn}
            </button>
          ))}
        </div>
      </div>
      <div
        className="absolute md:block hidden bottom-0 h-[3px] rounded-t-[2px] bg-primary transition-all duration-200"
        style={indicatorStyle}
      />
    </div>
  );
};
