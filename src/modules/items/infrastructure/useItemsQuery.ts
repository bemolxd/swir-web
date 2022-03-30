import { buildUrl } from "utils";

import { useQuery } from "components/RemoteData";

import { ItemsQueryParams, ItemsResponse } from "../application";

export const getItemsQueryKey = (params?: ItemsQueryParams) =>
  buildUrl("items", params);

export const useItemsQuery = (params?: ItemsQueryParams) => {
  const data = useQuery<ItemsResponse>({
    queryKeys: getItemsQueryKey(params),
    fetchPath: getItemsQueryKey(params),
  });

  return data;
};
