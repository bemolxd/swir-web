import { ItemCategory } from "./ItemCategory";
import { ItemType } from "./ItemType";

export interface Item {
  itemId: string;
  name: string;
  vendor: string;
  category: ItemCategory;
  subcategory?: string;
  imageUrl?: string;
  description: string;
  parameters: string;
  quantity: number;
  type: ItemType;
}
