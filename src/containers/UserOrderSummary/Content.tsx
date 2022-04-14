import { VStack } from "@chakra-ui/react";
import { Form } from "components/Form";

import { withSuspense } from "components/RemoteData";

import { Order } from "modules/userOrders/application";
import { useOrderQuery } from "modules/userOrders/infrastructure";
import {
  DateSection,
  SelectedItems,
  SenderCommentSection,
  SendSection,
  SummaryHeader,
  TechSelectSection,
} from "modules/userOrders/presentation";

interface IProps {
  orderId: string;
}

export const Content = withSuspense(({ orderId }: IProps) => {
  const order = useOrderQuery(orderId);
  const formId = `order.${orderId}.summaryForm`;

  return (
    <Form<Order>
      id={formId}
      onSubmit={(data) => console.log(data)}
      defaultValues={order}
    >
      <VStack align="flex-start" w="100%">
        <SummaryHeader />
        <TechSelectSection />
        <DateSection />
        <SelectedItems items={order?.items!} orderId={order?.orderId!} />
        <SenderCommentSection />
        <SendSection formId={formId} />
      </VStack>
    </Form>
  );
});
