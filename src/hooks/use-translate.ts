import { Language } from "@/store/lang";

export const useTranslate = (lang: "ru" | "en"): number => {
  return lang === Language.RU ? 0 : 1;
};
