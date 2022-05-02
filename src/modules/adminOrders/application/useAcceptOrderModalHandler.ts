import create from "zustand";

import { AcceptOrderDto } from "./dto";

interface AcceptOrderModalStore {
  store: Store | undefined;
  isOpen: boolean;
  onOpen(values: Store): void;
  onClose(): void;
}

interface Store {
  orderId: string;
  dto: AcceptOrderDto;
}

export const useAcceptOrderModalHandler = create<AcceptOrderModalStore>(
  (set) => ({
    store: undefined,
    isOpen: false,
    onOpen(values: Store) {
      set({ isOpen: true, store: values });
    },
    onClose() {
      set({ isOpen: false });
    },
  })
);
