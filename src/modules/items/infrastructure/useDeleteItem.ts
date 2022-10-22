import { useMutation } from "react-query";
import { api } from "utils";

import {
  useGetQueryData,
  useInvalidateQuery,
  useSetQueryData,
} from "components/RemoteData";
import { useCheckMobile } from "components/Layout";

import { DEFAULT_PARAMS, ItemsResponse } from "../application";
import { getItemsQueryKey } from "./useItemsQuery";

export const useDeleteItem = (itemId: string) => {
  const setQueryData = useSetQueryData();
  const itemsQueryData = useGetQueryData<ItemsResponse>(
    getItemsQueryKey(DEFAULT_PARAMS)
  );
  const invalidateQuery = useInvalidateQuery();
  const isMobile = useCheckMobile();

  const { mutateAsync, isLoading } = useMutation(
    async () => await api.delete(`items/${itemId}`),
    {
      onSuccess: () => {
        if (isMobile) {
          invalidateQuery(getItemsQueryKey(DEFAULT_PARAMS));
          return;
        }

        setQueryData<ItemsResponse>(getItemsQueryKey(DEFAULT_PARAMS), {
          ...itemsQueryData,
          data: {
            ...itemsQueryData.data,
            collection: itemsQueryData.data.collection.filter(
              (item) => item.itemId !== itemId
            ),
            meta: {
              ...itemsQueryData.data.meta,
              total: itemsQueryData.data.meta.total - 1,
            },
          },
        });
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
