import { api } from "utils";

import { useMeQuery } from "components/Auth";
import { useQueryParams } from "components/QueryParamsV2";
import { useInfiniteQuery } from "components/RemoteData";

import { OrdersResponse } from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";

export const useInfiniteUserOrdersQuery = () => {
  const { params } = useQueryParams();
  const me = useMeQuery();

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      [getUserOrdersQueryKey(me?.userId!, params), params],
      async ({ pageParam = 0 }) => {
        return (
          await api.get<OrdersResponse>(
            getUserOrdersQueryKey(me?.userId!, {
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
