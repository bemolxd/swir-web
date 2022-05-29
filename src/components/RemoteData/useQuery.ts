import { useQuery as useReactQuery, QueryKey } from "react-query";

import { api } from "utils";

export const useQuery = <ResponseData extends unknown>(
  queryKey: QueryKey,
  fetchPath: string
) =>
  useReactQuery(queryKey, async () => await api.get<ResponseData>(fetchPath))
    .data?.data;
