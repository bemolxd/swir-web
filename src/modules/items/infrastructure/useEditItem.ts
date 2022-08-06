import { useMutation } from "react-query";
import { api } from "utils";

import { useGetQueryData, useSetQueryData } from "components/RemoteData";

import {
  DEFAULT_PARAMS,
  EditItemDto,
  Item,
  ItemsResponse,
} from "../application";
import { getItemsQueryKey } from "./useItemsQuery";
import { getItemDetailsQueryKey } from "./useItemDetailsQuery";

export const useEditItem = (itemId: string) => {
  const setQueryData = useSetQueryData();
  const itemsQueryData = useGetQueryData<ItemsResponse>(
    getItemsQueryKey(DEFAULT_PARAMS)
  );
  const itemDetailsQueryData = useGetQueryData<Item>(
    getItemDetailsQueryKey(itemId)
  );

  const { mutateAsync, isLoading } = useMutation(
    async (dto: EditItemDto) => {
      return await api.put<Item>(`items/${itemId}`, dto);
    },
    {
      onSuccess: (res, dto) => {
        if (!res) return;

        if (!!itemsQueryData) {
          setQueryData<ItemsResponse>(getItemsQueryKey(DEFAULT_PARAMS), {
            ...itemsQueryData,
            data: {
              ...itemsQueryData.data,
              collection: itemsQueryData.data.collection.map((item) => {
                if (item.itemId === itemId) {
                  return {
                    ...item,
                    ...dto,
                  };
                }
                return item;
              }),
            },
          });
        }

        if (!!itemDetailsQueryData) {
          setQueryData<Item>(getItemDetailsQueryKey(itemId), {
            ...itemDetailsQueryData,
            data: {
              ...itemDetailsQueryData.data,
              ...dto,
            },
          });
        }
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
