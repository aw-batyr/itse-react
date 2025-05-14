import { Loader } from "@/components/shared";

export const useLoading = (loading: boolean) => {
  if (loading) return <Loading />;
};
