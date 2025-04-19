import { getMasterClasses } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export const useMasterClasses = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["master-classes", lang],
    queryFn: () => getMasterClasses(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
