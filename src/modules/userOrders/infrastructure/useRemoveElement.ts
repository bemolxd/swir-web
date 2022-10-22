import { useMutation } from "react-query";

import { api } from "utils";

import { useInvalidateQuery } from "components/RemoteData";

import { Order, RemoveElementDto } from "../application";
import { getOrderQueryKey } from "./useOrderQuery";

export const useRemoveElement = (orderId: string) => {
  const invalidateQuery = useInvalidateQuery();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: RemoveElementDto) => {
      const { data } = await api.put<Order>(
        `orders/${orderId}/removeElement`,
        dto
      );
      return data;
    },
    {
      onSuccess: (response) => {
        if (!response) return;

        invalidateQuery(getOrderQueryKey(orderId));
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
