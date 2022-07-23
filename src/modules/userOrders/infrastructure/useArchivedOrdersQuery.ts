import { OrderStatusPolicy } from "utils";

import { useGetContextType, useMeQuery } from "components/Auth";
import { useQuery } from "components/RemoteData";

import { getOrdersQueryKey } from "modules/adminOrders/infrastructure";

import { OrdersQueryParams, OrdersResponse } from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";

export const useArchivedOrdersQuery = (params?: OrdersQueryParams) => {
  const me = useMeQuery();
  const { isGlobal } = useGetContextType();

  const queryKey = isGlobal
    ? getOrdersQueryKey(params)
    : getUserOrdersQueryKey(me?.userId!, params);

  const data = useQuery<OrdersResponse>(queryKey, queryKey);

  // TODO: brać bezpośrednio z api, bo się meta chrzani
  return {
    collection: data?.collection.filter((order) =>
      OrderStatusPolicy(order.status).isFinished()
    ),
    meta: data?.meta,
  };
};
