export interface QueryData<Data> {
  config: any;
  data: Data;
  headers: any;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
