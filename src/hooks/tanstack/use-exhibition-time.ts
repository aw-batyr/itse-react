import { getExhibitionTime } from "@/services/service";
import { useQuery } from "@tanstack/react-query";

export const useExhibitionTime = () => {
  const { data, isPending } = useQuery({
    queryKey: ["exhibiton-time"],
    queryFn: () => getExhibitionTime(),
  });

  return { data, isPending };
};
