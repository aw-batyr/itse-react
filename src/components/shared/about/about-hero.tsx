import { FC } from "react";
import { Container, Cover, Loader } from "../";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { aboutInfo } from "@/data/about/about-info";
import { useStaticWords } from "@/hooks/tanstack/use-static-words";

interface Props {
  className?: string;
}

export const AboutHero: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useStaticWords(String(2));

  const block_2 = data?.find((item) => item.key === "about_2");
  const block_3 = data?.find((item) => item.key === "about_3");
  const block_4 = data?.find((item) => item.key === "about_4");

  const title_1 = data?.find((item) => item.key === "about_1_title")?.text;
  const text_1 = data?.find((item) => item.key === "about_1_description")?.text;

  return (
    <div className={className}>
      <Cover title={aboutInfo[useTranslate(lang)].cover} />

      {isPending ? (
        <Loader className="my-40" />
      ) : (
        <Container className="flex flex-col md:my-20 my-10 gap-16">
          <div className="flex flex-col gap-6">
            <h3 className="h2">{title_1}</h3>
            <p className="text-18">{text_1}</p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="h2">{block_2?.text}</h3>

            <ul className="list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal">
              {block_2?.list?.map((item) => (
                <li key={item.text}>{item.text}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="h2">{block_3?.text}</h3>
            <ul className="list-disc pl-8 flex flex-col gap-3 text-lg text-on_surface_v normal">
              {block_3?.list?.map((item) => (
                <li key={item.text}>{item.text}</li>
              ))}
            </ul>

            <p className="text-18">{block_4?.text}</p>
          </div>
        </Container>
      )}
    </div>
  );
};
