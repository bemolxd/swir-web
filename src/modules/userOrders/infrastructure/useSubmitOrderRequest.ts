import { useInvalidateQuery } from "components/RemoteData";
import { useMutation } from "react-query";

import { api } from "utils";

import { SubmitOrderDto } from "../application";
import { getOrderQueryKey } from "./useOrderQuery";

export const useSubmitOrderRequest = (senderId: string, orderId: string) => {
  const invalidateQuery = useInvalidateQuery();

  const { mutateAsync, isLoading } = useMutation(
    async (orderBody: SubmitOrderDto) => {
      return await api.post(
        `users/${senderId}/orders/${orderId}/submit`,
        orderBody
      );
    },
    {
      onSuccess: () => {
        invalidateQuery(getOrderQueryKey(orderId));
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
