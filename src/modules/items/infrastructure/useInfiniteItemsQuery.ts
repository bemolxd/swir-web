import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { useInfiniteQuery } from "components/RemoteData";

import { ItemsQueryParams, ItemsResponse } from "../application";
import { getItemsQueryKey } from "./useItemsQuery";

export const useInfiniteItemsQuery = () => {
  const { params } = useQueryParams<ItemsQueryParams>();

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(getItemsQueryKey(params), async ({ pageParam = 0 }) => {
      return (
        await api.get<ItemsResponse>(
          getItemsQueryKey({ ...params, limit: 10, offset: pageParam })
        )
      ).data;
    });

  return { data, isLoading, hasNextPage, fetchNextPage, refetch };
};
