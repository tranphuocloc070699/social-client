import { create } from "zustand";

interface IProductFilter {
  isExpandFilterOnMobile: boolean;
  toggleFilterOnMobile: () => void;
}

export const useProductFilterStore = create<IProductFilter>((set) => ({
  isExpandFilterOnMobile: false, // Initial state for filter expansion
  toggleFilterOnMobile: () =>
    set((state) => ({
      isExpandFilterOnMobile: !state.isExpandFilterOnMobile, // Toggle the state
    })),
}));
