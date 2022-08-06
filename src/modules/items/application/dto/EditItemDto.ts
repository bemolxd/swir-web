import { Item } from "../types";

export type EditItemDto = Omit<Item, "itemId">;
