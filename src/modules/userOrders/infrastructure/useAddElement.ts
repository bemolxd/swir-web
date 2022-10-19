import { useMutation, useQueryClient } from "react-query";
import { api } from "utils";

import { useMeQuery } from "components/Auth";

import { getUserOrdersQueryKey } from "./useUserOrdersQuery";
import { AddElementDto, defaultParams, Order } from "../application";

export const useAddElement = (orderId: string) => {
  const queryClient = useQueryClient();
  const me = useMeQuery();

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

        queryClient.refetchQueries(
          getUserOrdersQueryKey(me?.userId!, defaultParams)
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
