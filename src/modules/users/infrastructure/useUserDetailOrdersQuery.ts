import { buildUrl } from "utils";

import {
  OrdersQueryParams,
  OrdersResponse,
} from "modules/userOrders/application";
import { useQueryParams } from "components/QueryParamsV2";
import { useQuery } from "components/RemoteData";

export const getUserDetailOrdersQueryKey = (
  userId: string,
  params: OrdersQueryParams
) => buildUrl(`/users/${userId}/detail/orders`, params);

export const useUserDetailOrdersQuery = (userId: string) => {
  const { params } = useQueryParams();

  return useQuery<OrdersResponse>(
    getUserDetailOrdersQueryKey(userId, params),
    getUserDetailOrdersQueryKey(userId, params)
  );
};
