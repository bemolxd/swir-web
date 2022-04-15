import create from "zustand";

interface FilterModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useUserFilterModalHandler = create<FilterModalStore>((set) => ({
  isOpen: false,
  onOpen() {
    set({ isOpen: true });
  },
  onClose() {
    set({ isOpen: false });
  },
}));
