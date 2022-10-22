import { useQueryParams } from "components/QueryParamsV2";
import { useInfiniteQuery } from "components/RemoteData";
import { OrdersResponse } from "modules/userOrders/application";
import { api } from "utils";
import { getOrdersQueryKey } from "./useOrdersQuery";

export const useInfiniteOrdersQuery = () => {
  const { params } = useQueryParams();

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    getOrdersQueryKey(params),
    async ({ pageParam = 0 }) => {
      return (
        await api.get<OrdersResponse>(
          getOrdersQueryKey({ ...params, limit: 10, offset: pageParam })
        )
      ).data;
    }
  );

  return { data, isLoading, fetchNextPage, hasNextPage };
};
