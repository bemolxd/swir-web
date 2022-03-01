import create from "zustand";

interface MobileMenuStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useMobileMenuHandler = create<MobileMenuStore>((set) => ({
  isOpen: false,
  onOpen() {
    set({ isOpen: true });
  },
  onClose() {
    set({ isOpen: false });
  },
}));
