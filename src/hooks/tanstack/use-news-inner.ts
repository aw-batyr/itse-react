import { getNewsInner } from "@/services/service";
import { LangState } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export const useNewsInner = (id: number, lang: LangState["lang"]) => {
  const { data, isPending } = useQuery({
    queryKey: ["news-inner", id, lang],
    queryFn: () => getNewsInner(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
