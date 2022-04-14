import { VStack } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";

import { useOrderQuery } from "modules/userOrders/infrastructure";
import {
  DeleteOrderSection,
  DetailsHeader,
  OrderSelectedItems,
  OrderStatusSection,
  OrderSummarySection,
  ReservationDatesSection,
  SenderDetailsCommentSection,
} from "modules/userOrders/presentation";

interface IProps {
  orderId: string;
}

export const Content = withSuspense(({ orderId }: IProps) => {
  const orderDetails = useOrderQuery(orderId);

  return (
    <VStack align="flex-start" w="100%">
      <DetailsHeader orderId={orderDetails?.orderId!} />
      <OrderStatusSection orderStatus={orderDetails?.status!} />
      <ReservationDatesSection
        status={orderDetails?.status!}
        dateFrom={orderDetails?.dateFrom!}
        dateTo={orderDetails?.dateTo!}
      />
      <OrderSelectedItems
        items={orderDetails?.items!}
        status={orderDetails?.status!}
        orderId={orderDetails?.orderId!}
      />
      <OrderSummarySection status={orderDetails?.status!} />
      <SenderDetailsCommentSection order={orderDetails!} />
      <DeleteOrderSection
        senderId={orderDetails?.senderId!}
        orderId={orderId}
        status={orderDetails?.status!}
      />
    </VStack>
  );
});
