import create from "zustand";

interface AboutModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useAboutModalHandler = create<AboutModalStore>((set) => ({
  isOpen: false,
  onOpen() {
    set({ isOpen: true });
  },
  onClose() {
    set({ isOpen: false });
  },
}));
