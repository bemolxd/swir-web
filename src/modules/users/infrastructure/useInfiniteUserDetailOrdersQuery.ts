import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { useInfiniteQuery } from "components/RemoteData";

import { OrdersResponse } from "modules/userOrders/application";

import { getUserDetailOrdersQueryKey } from "./useUserDetailOrdersQuery";

export const useInfiniteUserDetailOrders = (userId: string) => {
  const { params } = useQueryParams();

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      getUserDetailOrdersQueryKey(userId, params),
      async ({ pageParam = 0 }) => {
        return (
          await api.get<OrdersResponse>(
            getUserDetailOrdersQueryKey(userId, {
              ...params,
              limit: 10,
              offset: pageParam,
            })
          )
        ).data;
      }
    );

  return { data, isLoading, hasNextPage, fetchNextPage, refetch };
};
