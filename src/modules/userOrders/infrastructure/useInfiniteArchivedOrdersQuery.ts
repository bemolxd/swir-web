import { api } from "utils";
import { ContextType } from "types";

import { useMeQuery } from "components/Auth";
import { useQueryParams } from "components/QueryParamsV2";
import { useInfiniteQuery } from "components/RemoteData";

import { OrdersQueryParams, OrdersResponse } from "../application";
import { getArchivedOrdersQueryKey } from "./useArchivedOrdersQuery";

export const useInfiniteArchivedOrdersQuery = () => {
  const { params } = useQueryParams<OrdersQueryParams>();
  const me = useMeQuery();
  const isAdmin = me?.contextType !== ContextType.USER;

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      getArchivedOrdersQueryKey(isAdmin, params, me?.userId),
      async ({ pageParam = 0 }) => {
        return (
          await api.get<OrdersResponse>(
            getArchivedOrdersQueryKey(
              isAdmin,
              { ...params, limit: 10, offset: pageParam },
              me?.userId
            )
          )
        ).data;
      }
    );

  return { data, isLoading, hasNextPage, fetchNextPage, refetch };
};
