import { useQuery } from "components/RemoteData";
import { ItemAvailability } from "../application";

export const getItemAvailabilityQueryKey = (itemId: string) =>
  `items/${itemId}/availability`;

export const useItemAvailabilityQuery = (itemId: string) =>
  useQuery<ItemAvailability>(
    getItemAvailabilityQueryKey(itemId),
    getItemAvailabilityQueryKey(itemId)
  );
