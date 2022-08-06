import { useMutation, useQueryClient } from "react-query";
import { api } from "utils";

import { CreateItemDto, DEFAULT_PARAMS } from "../application";
import { getItemsQueryKey } from "./useItemsQuery";

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: CreateItemDto) => await api.post("items", dto),
    {
      onMutate: () =>
        queryClient.invalidateQueries(getItemsQueryKey(DEFAULT_PARAMS)),
      onSuccess: () =>
        queryClient.refetchQueries(getItemsQueryKey(DEFAULT_PARAMS)),
    }
  );

  return [mutateAsync, isLoading] as const;
};
