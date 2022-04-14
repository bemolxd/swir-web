import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { SubmitOrderDto } from "../application";
import { getOrderQueryKey } from "./useOrderQuery";

export const useSubmitOrderRequest = (senderId: string, orderId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (orderBody: SubmitOrderDto) => {
      return await api.put(`users/${senderId}/orders/${orderId}`, orderBody);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(getOrderQueryKey(orderId));
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
