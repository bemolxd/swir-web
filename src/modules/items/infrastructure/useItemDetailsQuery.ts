import { useQuery } from "components/RemoteData";

import { Item } from "../application";

export const useItemDetailsQuery = (itemId: string) => {
  const data = useQuery<Item>({
    queryKeys: `items/${itemId}`,
    fetchPath: `items/${itemId}`,
  });

  return data;
};
