import { IQueryParams } from "types";

export interface OrdersQueryParams extends IQueryParams {
  techId?: string;
  senderId?: string;
  status?: string;
}
