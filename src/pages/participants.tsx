import { FC } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { Container, Loader, Tabs } from "@/components/shared";
import { useParticipants } from "@/hooks/tanstack/use-participants";

interface Props {
  className?: string;
}

export const Participants: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  // const p_en = "Participants list";
  // const p_ru =
  //   "Здесь представлен полный список компаний, принимавших и принимающих участие в нашей выставке. Ознакомьтесь с ними и их сферой деятельности, чтобы лучше спланировать свой визит";

  const { data, isPending } = useParticipants();

  const dataHeader = {
    company: lang === "ru" ? "Название компании" : "Company name",
    country: lang === "ru" ? "Страна" : "Country",
    industry: lang === "ru" ? "Сфера деятельности" : "Industry",
  };

  return (
    <Container>
      <section className={cn("page-padding", className)}>
        <h1 className="text-center md:text-5xl text-3xl mb-4">
          {lang === "ru" ? "Список участников" : "List of participants"}
        </h1>
        {/* <p className="text-base normal text-center max-w-[600px] mx-auto mb-10">
          {lang === "ru" ? p_ru : p_en}
        </p> */}

        <Tabs className="mb-6 md:w-fit" />

        <div className="p-2 sm:p-0 bg-bg_surface_container overflow-hidden">
          <div className="sm:flex items-center hidden h-[52px]  border-b border-outline_v">
            <h3 className="flex-[0_0_45.54%] pl-4">{dataHeader.company}</h3>
            <h3 className="flex-[0_0_19.80%]">{dataHeader.country}</h3>
            <h3 className="flex-[0_0_34.65%]">{dataHeader.industry}</h3>
          </div>

          {/* ITEM */}

          {isPending ? (
            <Loader />
          ) : (
            data?.map((item, index, arr) => (
              <>
                <div
                  key={index}
                  className="flex border-b sm:hidden py-2 border-outline_v"
                >
                  <div className="flex flex-1 flex-col items-start gap-4">
                    <div className="flex items-center gap-3 w-full">
                      <h3 className="text-xs normal flex-[1_0_70px]">
                        {item?.name}
                      </h3>
                      <h4 className="text-xs w-full">Чудо-Мир</h4>
                    </div>

                    <div className="flex items-center gap-3 flex-[1_0_70px]">
                      <h3 className="text-xs normal ">Страна:</h3>
                      <div className="flex items-center gap-1">
                        <img src="/ru.svg" alt="flag" className="size-4" />
                        <h4 className="text-xs">Россия</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <h3 className="text-xs normal flex-[1_0_70px]">
                        Название:
                      </h3>
                      <h4 className="text-xs w-full">Чудо-Мир</h4>
                    </div>
                    {/* ITEM */}
                  </div>
                  <div className="size-20 bg-black flex-[0_0_80px] m-1" />
                </div>

                <div
                  className={cn(
                    "sm:flex hidden p-4 ",
                    arr.length !== index + 1 && "border-b border-outline_v"
                  )}
                >
                  <div className="flex-[0_0_45.54%] flex gap-8">
                    <div className="size-[88px] bg-white sm:size-[128px]">
                      <img
                        src={item?.participants?.[0]?.image?.path ?? ""}
                        alt="flag"
                        className="size-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg">{item?.name}</h3>
                  </div>

                  <div className="flex-[0_0_19.80%] flex gap-2.5">
                    <img
                      src={item?.participants?.[0]?.image_country?.path ?? ""}
                      alt="flag"
                      className="size-4"
                    />
                    <h4 className="text-sm normal">
                      {item?.participants?.[0]?.country}
                    </h4>
                  </div>

                  <h3 className="text-sm normal md:ml-1 flex-[0_0_34.65%]">
                    Игрушки и развивающие товары
                  </h3>
                </div>
              </>
            ))
          )}
        </div>
      </section>
    </Container>
  );
};
