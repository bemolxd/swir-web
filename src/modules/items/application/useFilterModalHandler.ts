import create from "zustand";

interface FilterModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useFilterModalHandler = create<FilterModalStore>((set) => ({
  isOpen: false,
  onOpen() {
    set({ isOpen: true });
  },
  onClose() {
    set({ isOpen: false });
  },
}));
