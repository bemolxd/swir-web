import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { CreateOrderDto, defaultParams } from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";

export const useCreateOrder = (senderId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: CreateOrderDto) => {
      const { data } = await api.post("orders", dto);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          getUserOrdersQueryKey(senderId, defaultParams)
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
