import { useMutation } from "react-query";
import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { useGetQueryData, useSetQueryData } from "components/RemoteData";

import {
  OrdersResponse,
  Order,
  OrderStatus,
} from "modules/userOrders/application";
import { getOrderQueryKey } from "modules/userOrders/infrastructure";

import { FinishOrderDto } from "../application";
import { getOrdersQueryKey } from "./useOrdersQuery";

export const useFinishOrder = (orderId: string) => {
  const { params } = useQueryParams();
  const setQueryData = useSetQueryData();
  const ordersQueryData = useGetQueryData<OrdersResponse>(
    getOrdersQueryKey(params)
  );
  const orderDetailsQueryData = useGetQueryData<Order>(
    getOrderQueryKey(orderId)
  );

  const { mutateAsync, isLoading } = useMutation(
    async (dto: FinishOrderDto) => {
      return await api.post(`orders/${orderId}/finish`, dto);
    },
    {
      onSuccess: (res, { techComment }) => {
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
                    techComment,
                    isPublic: false,
                    status: OrderStatus.FINISHED,
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
              techComment,
              isPublic: false,
              status: OrderStatus.FINISHED,
            },
          });
        }
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
