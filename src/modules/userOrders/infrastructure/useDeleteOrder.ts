import { useMutation } from "react-query";

import { api } from "utils";

import { useInvalidateQuery } from "components/RemoteData";

import { defaultParams } from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";

export const useDeleteOrder = (senderId: string, orderId: string) => {
  const invalidateQuery = useInvalidateQuery();

  const { mutateAsync, isLoading } = useMutation(
    async () => {
      return await api.delete(`users/${senderId}/orders/${orderId}`);
    },
    {
      onSuccess: () => {
        invalidateQuery(getUserOrdersQueryKey(senderId, defaultParams));
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
