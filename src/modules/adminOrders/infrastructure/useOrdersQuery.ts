import { buildUrl } from "utils";

import { useQuery } from "components/RemoteData";

import {
  OrdersQueryParams,
  OrdersResponse,
} from "modules/userOrders/application";

export const getOrdersQueryKey = (params?: OrdersQueryParams) =>
  buildUrl("orders", params);

export const useOrdersQuery = (params?: OrdersQueryParams) => {
  const data = useQuery<OrdersResponse>(
    getOrdersQueryKey(params),
    getOrdersQueryKey(params)
  );

  return data;
};
