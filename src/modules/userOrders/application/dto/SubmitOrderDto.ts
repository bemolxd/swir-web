import { SelectedItem } from "../types";

export interface SubmitOrderDto {
  techId: string;
  items: SelectedItem[];
  senderComment: string;
  dateFrom: string;
  dateTo: string;
}
