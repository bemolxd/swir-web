import { Meta } from "./Meta";

export interface QueryListData<ResponseData> {
  collection: ResponseData[];
  meta: Meta;
}
