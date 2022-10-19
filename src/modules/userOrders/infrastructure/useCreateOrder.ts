import { useMutation, useQueryClient } from "react-query";
import { api } from "utils";

import { CreateOrderDto, defaultParams, Order } from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";

export const useCreateOrder = (senderId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: CreateOrderDto) => {
      return await api.post<Order>("orders", dto);
    },
    {
      onSuccess: (res) => {
        if (!res) return;

        queryClient.refetchQueries(
          getUserOrdersQueryKey(senderId, defaultParams)
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
