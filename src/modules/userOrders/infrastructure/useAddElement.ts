import { useMutation } from "react-query";
import { api } from "utils";

import { useMeQuery } from "components/Auth";
import {
  useGetQueryData,
  useInvalidateQuery,
  useSetQueryData,
} from "components/RemoteData";
import { useCheckMobile } from "components/Layout";

import {
  AddElementDto,
  defaultParams,
  Order,
  OrdersResponse,
} from "../application";
import { getUserOrdersQueryKey } from "./useUserOrdersQuery";
import { getOrderQueryKey } from "./useOrderQuery";

export const useAddElement = (orderId: string) => {
  const me = useMeQuery();
  const setQueryData = useSetQueryData();
  const ordersQueryData = useGetQueryData<OrdersResponse>(
    getUserOrdersQueryKey(me?.userId!, defaultParams)
  );
  const orderDetailsQueryData = useGetQueryData<Order>(
    getOrderQueryKey(orderId)
  );
  const invalidateQuery = useInvalidateQuery();
  const isMobile = useCheckMobile();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: AddElementDto) => {
      const { data } = await api.put<Order>(
        `orders/${orderId}/addElement`,
        dto
      );
      return data;
    },
    {
      onSuccess: (response, { item }) => {
        if (!response) return;

        if (isMobile) {
          invalidateQuery(getUserOrdersQueryKey(me?.userId!, defaultParams));
          invalidateQuery(getOrderQueryKey(orderId));
          return;
        }

        if (!!ordersQueryData) {
          setQueryData<OrdersResponse>(
            getUserOrdersQueryKey(me?.userId!, defaultParams),
            {
              ...ordersQueryData,
              data: {
                ...ordersQueryData.data,
                collection: ordersQueryData.data.collection.map((order) => {
                  if (order.orderId === orderId) {
                    return {
                      ...order,
                      items: [...order.items, item],
                    };
                  }
                  return order;
                }),
              },
            }
          );
        }

        if (!!orderDetailsQueryData) {
          setQueryData<Order>(getOrderQueryKey(orderId), {
            ...orderDetailsQueryData,
            data: {
              ...orderDetailsQueryData.data,
              items: [...orderDetailsQueryData.data.items, item],
            },
          });
        }
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
