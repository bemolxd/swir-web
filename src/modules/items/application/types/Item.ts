export interface Item {
  itemId: string;
  name: string;
  vendor: string;
  category: string;
  subcategory?: string;
  imageUrl?: string;
  description: string;
  parameters: string;
  quantity: number;
}
