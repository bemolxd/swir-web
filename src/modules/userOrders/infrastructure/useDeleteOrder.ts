import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";

import { defaultParams } from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";

export const useDeleteOrder = (senderId: string, orderId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async () => {
      return await api.delete(`users/${senderId}/orders/${orderId}`);
    },
    {
      onMutate: () => {
        queryClient.invalidateQueries(
          getUserOrdersQueryKey(senderId, defaultParams)
        );
        queryClient.refetchQueries(
          getUserOrdersQueryKey(senderId, defaultParams)
        );
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
