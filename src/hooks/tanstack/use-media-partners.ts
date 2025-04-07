import { getMediaPartners } from "@/services/service";
import { useQuery } from "@tanstack/react-query";

export interface PartnersType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  link: string;
  image: Image;
}

export interface Image {
  path: string;
}

export const useMediaPartners = () => {
  const { data, isPending } = useQuery({
    queryKey: ["media-partners"],
    queryFn: () => getMediaPartners(),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
