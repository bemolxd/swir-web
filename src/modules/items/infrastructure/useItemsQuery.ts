import { useQuery } from "components/RemoteData";

import { ItemsResponse } from "../application";

export const useItemsQuery = () => {
  const data = useQuery<ItemsResponse>({
    queryKeys: "items",
    fetchPath: "items",
  });

  return data;
};
