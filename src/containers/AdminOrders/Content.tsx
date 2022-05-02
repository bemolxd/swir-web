import { VStack } from "@chakra-ui/react";
import { OrderStatusPolicy } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { useOrdersQuery } from "modules/userOrders/infrastructure";
import { OrdersList } from "modules/userOrders/presentation";

export const Content = withSuspense(() => {
  const { params } = useQueryParams();
  const orders = useOrdersQuery(params);

  const activeOrders = orders?.collection.filter((order) =>
    OrderStatusPolicy(order.status).isActive()
  );

  return (
    <VStack w="100%">
      <OrdersList orders={activeOrders!} />
    </VStack>
  );
});
