import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getPresentationsCategories } from "@/services/service";

export const usePresentationsCategories = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["presentaions-categories", lang],
    queryFn: () => getPresentationsCategories(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
