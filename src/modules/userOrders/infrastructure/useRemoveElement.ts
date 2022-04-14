import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { Order, RemoveElementDto } from "../application";
import { getOrderQueryKey } from "./useOrderQuery";

export const useRemoveElement = (orderId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: RemoveElementDto) => {
      const { data } = await api.put<Order>(
        `orders/${orderId}/removeElement`,
        dto
      );
      return data;
    },
    {
      onSuccess: (response, dto) => {
        if (!response) return;

        queryClient.invalidateQueries([getOrderQueryKey(orderId)]);
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
