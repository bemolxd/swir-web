import { buildUrl } from "utils";

import { useMeQuery } from "components/Auth";
import { useQuery } from "components/RemoteData";

import { OrdersQueryParams, OrdersResponse } from "../application";
import { ContextType } from "types";

export const getArchivedOrdersQueryKey = (
  isAdmin: boolean,
  params?: OrdersQueryParams,
  senderId?: string
) =>
  isAdmin
    ? buildUrl("/archived-orders", params)
    : buildUrl(`/users/${senderId}/archived-orders`, params);

export const useArchivedOrdersQuery = (params?: OrdersQueryParams) => {
  const me = useMeQuery();
  const isAdmin = me?.contextType !== ContextType.USER;

  return useQuery<OrdersResponse>(
    getArchivedOrdersQueryKey(isAdmin, params, me?.userId),
    getArchivedOrdersQueryKey(isAdmin, params, me?.userId)
  );
};
