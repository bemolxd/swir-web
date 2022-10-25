import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { useInfiniteQuery } from "components/RemoteData";

import { UsersResponse } from "../application";
import { getUsersQueryKey } from "./useUsersQuery";

export const useInfiniteUsersQuery = () => {
  const { params } = useQueryParams();

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(getUsersQueryKey(params), async ({ pageParam = 0 }) => {
      return await (
        await api.get<UsersResponse>(
          getUsersQueryKey({ ...params, limit: 10, offset: pageParam })
        )
      ).data;
    });

  return { data, isLoading, hasNextPage, fetchNextPage, refetch };
};
