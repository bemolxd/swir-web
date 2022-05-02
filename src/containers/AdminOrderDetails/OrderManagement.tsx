import { VStack } from "@chakra-ui/react";

import { Card } from "components/Card";

import {
  AssignedTech,
  AwardingSection,
  ManagementHeader,
  OrderStatusInfo,
} from "modules/adminOrders/presentation";
import { AwardingJustificationSection } from "modules/adminOrders/presentation/management/AwardingJustificationSection";
import { Order } from "modules/userOrders/application";

interface IProps {
  order: Order;
}

export const OrderManagement = ({ order }: IProps) => {
  return (
    <Card maxW="1300px" w="100%">
      <VStack align="flex-start" w="100%">
        <ManagementHeader />
        <AssignedTech techId={order.techId!} />
        <OrderStatusInfo status={order.status} />
        <AwardingSection order={order} />
        <AwardingJustificationSection order={order} />
      </VStack>
    </Card>
  );
};
