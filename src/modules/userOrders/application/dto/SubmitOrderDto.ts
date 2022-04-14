import { SelectedItem } from "../types";

export interface SubmitOrderDto {
  techId: string;
  items: SelectedItem[];
  senderComment: string | null;
  dateFrom: string;
  dateTo: string;
}
