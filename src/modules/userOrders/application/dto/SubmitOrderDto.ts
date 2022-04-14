import { SelectedItem } from "../types";

export interface SubmitOrderDto {
  techId: string;
  items: SelectedItem[];
  techComment: string | null;
  senderComment: string | null;
  dateFrom: string;
  dateTo: string;
  isPublic: boolean;
}
