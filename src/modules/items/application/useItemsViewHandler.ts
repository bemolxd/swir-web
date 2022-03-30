import create from "zustand";

type ItemsView = "list" | "grid";

interface ItemsViewStore {
  view: ItemsView;
  setView(view: ItemsView): void;
}

export const useItemsViewHandler = create<ItemsViewStore>((set) => ({
  view: "list",
  setView(view) {
    set({ view });
  },
}));
