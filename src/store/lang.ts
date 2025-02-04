// store/langStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum Language {
  EN = "en",
  RU = "ru",
}

export interface LangState {
  lang: "ru" | "en";
  setLang: (lang: Language) => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: Language.RU,
      setLang: (lang) => set({ lang }),
    }),
    { name: "lang-storage" }
  )
);
