import { buildUrl } from "utils";

import { useQuery } from "components/RemoteData";

import { Order } from "../application";

export const getOrderQueryKey = (orderId: string) =>
  buildUrl(`orders/${orderId}`);

export const useOrderQuery = (orderId: string) => {
  const data = useQuery<Order>(
    getOrderQueryKey(orderId),
    getOrderQueryKey(orderId)
  );

  return data;
};
