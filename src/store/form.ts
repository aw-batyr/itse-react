import { create } from "zustand";

interface Store {
  type: string;
  setType: (str: string) => void;
}

export const useFormStore = create<Store>()((set) => ({
  type: "B2B",

  setType: (type) => set((state) => ({ type: (state.type = type) })),
}));
