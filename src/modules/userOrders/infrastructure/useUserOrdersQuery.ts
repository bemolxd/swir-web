import { useQuery } from "components/RemoteData";

import { IQueryParams } from "types";

import { buildUrl } from "utils";

import { OrdersResponse } from "../application";

export const getUserOrdersQueryKey = (
  senderId: string,
  params?: IQueryParams
) => buildUrl(`users/${senderId}/orders`, params);

export const useUserOrdersQuery = (senderId: string, params?: IQueryParams) => {
  const data = useQuery<OrdersResponse>({
    queryKeys: getUserOrdersQueryKey(senderId, params),
    fetchPath: getUserOrdersQueryKey(senderId, params),
  });

  return data;
};
