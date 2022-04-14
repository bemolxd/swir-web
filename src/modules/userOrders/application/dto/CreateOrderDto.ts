import { SelectedItem } from "../types";

export interface CreateOrderDto {
  senderId: string;
  items: SelectedItem[];
}
