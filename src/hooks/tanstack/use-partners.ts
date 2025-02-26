import { getPartners } from "@/services/service";
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

export const usePartners = () => {
  const { data, isPending } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getPartners(),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
