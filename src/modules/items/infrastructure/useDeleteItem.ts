import { useMutation, useQueryClient } from "react-query";
import { api } from "utils";

import { DEFAULT_PARAMS } from "../application";
import { getItemsQueryKey } from "./useItemsQuery";

export const useDeleteItem = (itemId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async () => await api.delete(`items/${itemId}`),
    {
      onMutate: () =>
        queryClient.refetchQueries(getItemsQueryKey(DEFAULT_PARAMS)),
    }
  );

  return [mutateAsync, isLoading] as const;
};
