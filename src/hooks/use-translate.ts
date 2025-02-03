import { Language } from "@/store/lang";

export const useTranslate = (lang: Language): number => {
  return lang === Language.RU ? 0 : 1;
};
