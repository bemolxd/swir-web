import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { AddElementDto, Order } from "../application";
import { getOrderQueryKey } from "./useOrderQuery";

export const useAddElement = (orderId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: AddElementDto) => {
      const { data } = await api.put<Order>(
        `orders/${orderId}/addElement`,
        dto
      );
      return data;
    },
    {
      onSuccess: (response) => {
        if (!response) return;

        const oldData = queryClient.getQueryData<Order>([
          getOrderQueryKey(orderId),
        ]);

        if (!oldData) return;

        queryClient.setQueryData<Order>([getOrderQueryKey(orderId)], (prev) => {
          return {
            ...prev,
            items: response.items,
          } as Order;
        });
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
