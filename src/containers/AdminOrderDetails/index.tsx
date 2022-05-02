import { useParams } from "react-router";
import { VStack } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";

import { useOrderQuery } from "modules/userOrders/infrastructure";

import { OrderDetails } from "./OrderDetails";
import { withErrorBoundary } from "components/ErrorBoundary";
import { OrderManagement } from "./OrderManagement";

const AdminOrderDetails = withSuspense(() => {
  const { orderId } = useParams<{ orderId: string }>();
  const order = useOrderQuery(orderId!);

  return (
    <VStack w="100%" spacing={4}>
      <OrderDetails order={order!} />
      <OrderManagement order={order!} />
    </VStack>
  );
});

const AdminOrderDetailsWithEB = withErrorBoundary(AdminOrderDetails);

export { AdminOrderDetailsWithEB as AdminOrderDetails };
