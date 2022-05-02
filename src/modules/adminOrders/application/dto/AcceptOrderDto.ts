import { SelectedItem } from "modules/userOrders/application";

export interface AcceptOrderDto {
  techId: string;
  dateFrom: string;
  dateTo: string;
  items: SelectedItem[];
  techComment: string | null;
}
