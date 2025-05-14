import { DocumentDropdown, Loading, TitleDropdown } from "@/components/shared";
import { Cover, Container } from "@/components/layout";
import { useLangStore } from "@/store/lang";
import { useEffect, useState } from "react";
import { usePresentationsCategories } from "@/hooks/tanstack/use-presentaions-categories";
import { usePresentations } from "@/hooks/tanstack/use-presentaions";

export const Presentations = () => {
  const lang = useLangStore((state) => state.lang);
  const { data: cats } = usePresentationsCategories();

  const [activeTitle, setActiveTitle] = useState<{
    name?: string;
    id?: number;
  }>({});

  useEffect(() => {
    if (cats && cats[0]) {
      setActiveTitle({ name: cats[0].name, id: cats[0].id });
    }
  }, [cats]);

  const { data, isPending } = usePresentations(activeTitle?.id ?? 1);

  const coverTitle = lang === "ru" ? "Презентации" : "Presentations";

  console.log(data);

  return (
    <section className="">
      <Cover title={coverTitle} />

      <Container className="page-padding">
        {isPending ? (
          <Loading />
        ) : (
          <>
            <TitleDropdown
              setActiveTitle={setActiveTitle}
              activeTitle={activeTitle}
              triggerClassName="text-3xl mb-6"
              data={cats ?? []}
            />

            <div className="flex flex-col gap-6">
              {data?.presentations?.map((item, i) => (
                <DocumentDropdown {...item} key={i} />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
