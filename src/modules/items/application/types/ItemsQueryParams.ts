import { IQueryParams } from "types";

export interface ItemsQueryParams extends IQueryParams {
  type?: string[];
  category?: string[];
}
