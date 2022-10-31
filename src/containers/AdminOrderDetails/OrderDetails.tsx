import { VStack } from "@chakra-ui/react";

import { Card } from "components/Card";

import {
  DetailsHeader,
  ReservationDatesSection,
  OrderSelectedItems,
  SenderDetailsCommentSection,
} from "modules/userOrders/presentation";
import { SenderSection } from "modules/adminOrders/presentation";
import { Order } from "modules/userOrders/application";

interface IProps {
  order: Order;
}

export const OrderDetails = ({ order }: IProps) => {
  return (
    <Card maxW="1300px" w="100%">
      <VStack align="flex-start" w="100%">
        <DetailsHeader orderId={order.orderDoc ?? order.orderId} />
        <ReservationDatesSection
          status={order.status}
          dateFrom={order.dateFrom!}
          dateTo={order.dateTo!}
        />
        <OrderSelectedItems
          items={order.items}
          status={order.status}
          orderId={order.orderId}
        />
        <SenderSection senderId={order.senderId} />
        <SenderDetailsCommentSection order={order} />
      </VStack>
    </Card>
  );
};
