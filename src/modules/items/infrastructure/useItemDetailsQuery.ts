import { useQuery } from "components/RemoteData";

import { Item } from "../application";

const getItemDetailsQueryKey = (itemId: string) => `items/${itemId}`;

export const useItemDetailsQuery = (itemId: string) => {
  const data = useQuery<Item>(
    getItemDetailsQueryKey(itemId),
    getItemDetailsQueryKey(itemId)
  );

  return data;
};
