import { useQuery } from "components/RemoteData";
import { buildUrl } from "utils";
import { ItemAvailability } from "../application";

export const useItemsAvailabilityQueryKey = (itemIds: string[]) =>
  buildUrl<{}>("/availability", { itemIds });

export const useItemsAvailabilityQuery = (itemIds: string[]) =>
  useQuery<ItemAvailability[]>(
    useItemsAvailabilityQueryKey(itemIds),
    useItemsAvailabilityQueryKey(itemIds)
  );
