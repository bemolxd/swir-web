import { buildUrl } from "utils";

import { useQuery } from "components/RemoteData";

import { Order } from "../application";

export const getOrderQueryKey = (orderId: string) =>
  buildUrl(`orders/${orderId}`);

export const useOrderQuery = (orderId: string) => {
  const data = useQuery<Order>({
    queryKeys: getOrderQueryKey(orderId),
    fetchPath: getOrderQueryKey(orderId),
  });

  return data;
};
