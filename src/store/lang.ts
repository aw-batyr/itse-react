// store/langStore.ts
import { create } from "zustand";

export enum Language {
  EN = "en",
  RU = "ru",
}

export interface LangState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLangStore = create<LangState>()((set) => ({
  lang: Language.EN,
  setLang: (lang) => set({ lang }),
}));
