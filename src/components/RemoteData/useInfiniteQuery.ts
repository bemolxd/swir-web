import {
  useInfiniteQuery as useInfiniteReactQuery,
  QueryKey,
  QueryFunction,
} from "react-query";

import { QueryListData } from "types";

export const useInfiniteQuery = <ResponseData extends QueryListData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<ResponseData>,
  limit = 10
) =>
  useInfiniteReactQuery(queryKey, queryFn, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.collection.length < 10) return false;

      const page = Math.ceil(lastPage.meta.total / limit);

      if (lastPage.meta.total <= limit) return false;
      if (page === allPages.length) return false;

      return Number(lastPage.meta.offset) + limit;
    },
  });
