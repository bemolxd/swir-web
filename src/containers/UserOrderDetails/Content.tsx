import { VStack } from "@chakra-ui/react";

import { AwardingJustificationSection } from "modules/adminOrders/presentation/management/AwardingJustificationSection";
import { Order } from "modules/userOrders/application";

import {
  DeleteOrderSection,
  DetailsHeader,
  OrderSelectedItems,
  OrderStatusSection,
  OrderSummarySection,
  ReservationDatesSection,
  SenderDetailsCommentSection,
  TechUserSection,
} from "modules/userOrders/presentation";

interface IProps {
  orderDetails: Order | undefined;
}

export const Content = ({ orderDetails }: IProps) => {
  return (
    <VStack align="flex-start" w="100%">
      <DetailsHeader orderId={orderDetails?.orderId!} />
      <OrderStatusSection order={orderDetails!} />
      {orderDetails?.techId && <TechUserSection techId={orderDetails.techId} />}
      <AwardingJustificationSection order={orderDetails!} />
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
        orderId={orderDetails?.orderId!}
        status={orderDetails?.status!}
      />
    </VStack>
  );
};
