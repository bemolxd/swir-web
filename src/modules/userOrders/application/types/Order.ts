import { OrderStatus } from "./OrderStatus";
import { SelectedItem } from "./SelectedItem";

export interface Order {
  orderId: string;
  orderDoc: string | null;
  techId: string | null;
  senderId: string;
  status: OrderStatus;
  items: SelectedItem[];
  techComment: string | null;
  senderComment: string | null;
  dateFrom: string | null;
  dateTo: string | null;
  isPublic: boolean;
  isRejected: boolean;
  isArchived: boolean;
}
