import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getPhotos } from "@/services/service";

export const usePhotos = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["photos", lang],
    queryFn: () => getPhotos(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
