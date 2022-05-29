import { Meta } from "./Meta";

export interface QueryListData<ResponseData = unknown> {
  collection: ResponseData[];
  meta: Meta;
}
