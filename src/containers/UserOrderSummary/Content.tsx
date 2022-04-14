import { VStack } from "@chakra-ui/react";
import { Form } from "components/Form";

import { withSuspense } from "components/RemoteData";

import { SelectedItem } from "modules/userOrders/application";
import {
  useOrderQuery,
  useSubmitOrderRequest,
} from "modules/userOrders/infrastructure";
import {
  DateSection,
  SelectedItems,
  SenderCommentSection,
  SendSection,
  SummaryHeader,
  TechSelectSection,
  useSubmitOrderNotifications,
} from "modules/userOrders/presentation";

interface IProps {
  orderId: string;
}

interface FormData {
  techId: string | null;
  items: SelectedItem[] | null;
  senderComment: string | null;
  dateFrom: string | null;
  dateTo: string | null;
}

export const Content = withSuspense(({ orderId }: IProps) => {
  const order = useOrderQuery(orderId);
  const [submitData] = useSubmitOrderRequest(order?.senderId!, orderId);
  const { showSuccessNotification, showErrorNotification } =
    useSubmitOrderNotifications();

  const formId = `order.${orderId}.summaryForm`;

  const formData: FormData = {
    techId: null,
    items: order?.items ?? null,
    senderComment: null,
    dateFrom: null,
    dateTo: null,
  };

  const handleOnSubmit = async (data: any) => {
    try {
      console.log(data);
      await submitData(data);
      showSuccessNotification();
    } catch (error) {
      showErrorNotification();
    }
  };

  return (
    <Form<FormData>
      id={formId}
      onSubmit={(data) => handleOnSubmit(data)}
      defaultValues={formData}
      resetOnSubmit
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
