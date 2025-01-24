import { create } from "zustand";

interface Store {
  stage: number;
  setStage: (stage: number) => void;

  type: string;
  setType: (str: string) => void;
}

export const useFormStore = create<Store>()((set) => ({
  type: "B2B",
  stage: 1,

  setStage: (stage) => set((state) => ({ stage: (state.stage = stage) })),
  setType: (type) => set((state) => ({ type: (state.type = type) })),
}));
