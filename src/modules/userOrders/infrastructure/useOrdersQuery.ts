import { buildUrl } from "utils";

import { useQuery } from "components/RemoteData";

import { OrdersQueryParams, OrdersResponse } from "../application";

export const getOrdersQueryKey = (params?: OrdersQueryParams) =>
  buildUrl("orders", params);

export const useOrdersQuery = (params?: OrdersQueryParams) => {
  const data = useQuery<OrdersResponse>({
    queryKeys: getOrdersQueryKey(params),
    fetchPath: getOrdersQueryKey(params),
  });

  return data;
};
