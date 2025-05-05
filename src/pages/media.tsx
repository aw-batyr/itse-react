import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, Cover, Loader } from "@/components/shared";
import { usePhotos } from "@/hooks/tanstack/use-photos";
import { useLangStore } from "@/store/lang";

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
  //   const [state, setState] = useState(0);
  const { data, isPending, isError } = usePhotos(1);
  // const [activeCategory, setActiveCategory] = useState("");

  const lang = useLangStore((state) => state.lang);

  return (
    <section className={cn("", className)}>
      <Cover title={lang === "ru" ? "Моменты ITSE" : "Moments ITSE"} />

      <Container className="page-padding">
        {isError ? (
          <h1 className="text-4xl text-center">No information yet</h1>
        ) : isPending ? (
          <Loader />
        ) : (
          <>
            {/* <Tabs
              state={state}
              setState={setState}
              data={momentsTabs}
              className="mb-6"
            /> */}

            {/* <Menu
              title={activeCategory}
              triggerClassName="md:text-3xl text-2xl medium mb-10 mt-6"
              dropDownContent={data?.filter(
                (item) => item.name !== activeCategory
              ) || []}
            /> */}

            <div className="grid lg:grid-cols-4 lg:gap-y-4 lg:gap-x-6 md:gap-6 gap-4 grid-cols-2 place-items-center">
              {data?.map((photo, i) => (
                <div key={i} className=" size-full">
                  <img
                    src={photo?.photo?.path ?? ""}
                    alt={photo?.photo?.file_name ?? "photo"}
                    className="size-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
