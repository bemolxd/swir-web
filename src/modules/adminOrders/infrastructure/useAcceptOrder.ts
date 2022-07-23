import { useMutation } from "react-query";
import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { useGetQueryData, useSetQueryData } from "components/RemoteData";

import {
  Order,
  OrdersResponse,
  OrderStatus,
} from "modules/userOrders/application";
import { getOrderQueryKey } from "modules/userOrders/infrastructure";

import { AcceptOrderDto } from "../application";
import { getOrdersQueryKey } from "./useOrdersQuery";

export const useAcceptOrder = (orderId: string) => {
  const { params } = useQueryParams();
  const setQueryData = useSetQueryData();
  const ordersQueryData = useGetQueryData<OrdersResponse>(
    getOrdersQueryKey(params)
  );
  const orderDetailsQueryData = useGetQueryData<Order>(
    getOrderQueryKey(orderId)
  );

  const { mutateAsync, isLoading } = useMutation(
    async (dto: AcceptOrderDto) => {
      return await api.post(`orders/${orderId}/accept`, dto);
    },
    {
      onSuccess: (res, dto) => {
        if (!res) return;

        if (!!ordersQueryData) {
          setQueryData<OrdersResponse>(getOrdersQueryKey(params), {
            ...ordersQueryData,
            data: {
              ...ordersQueryData.data,
              collection: ordersQueryData.data.collection.map((order) => {
                if (order.orderId === orderId) {
                  return {
                    ...order,
                    ...dto,
                    status: OrderStatus.AWARDED,
                  };
                }
                return order;
              }),
            },
          });
        }

        if (!!orderDetailsQueryData) {
          setQueryData<Order>(getOrderQueryKey(orderId), {
            ...orderDetailsQueryData,
            data: {
              ...orderDetailsQueryData.data,
              ...dto,
              status: OrderStatus.AWARDED,
            },
          });
        }
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
