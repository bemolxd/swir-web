import { useIntl } from "react-intl";
import { useParams } from "react-router";
import { VStack } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";
import { GetBackButton } from "components/GetBackButton";
import { withErrorBoundary } from "components/ErrorBoundary";

import { useOrderQuery } from "modules/userOrders/infrastructure";
import { ArchivedOrderAlert } from "modules/userOrders/presentation";

import { OrderDetails } from "./OrderDetails";
import { OrderManagement } from "./OrderManagement";

const AdminOrderDetails = withSuspense(() => {
  const { orderId } = useParams<{ orderId: string }>();
  const order = useOrderQuery(orderId!);
  const { formatMessage } = useIntl();

  const buttonLabel = order?.isArchived
    ? formatMessage({
        id: "UserOrderDetails.goBackBtn.archivedLabel",
        defaultMessage: "Wróć do listy archiwizowanych zgłoszeń",
      })
    : formatMessage({
        id: "UserOrderDetails.goBackBtn.label",
        defaultMessage: "Wróc do listy zgłoszeń",
      });

  return (
    <VStack w="100%" align="flex-start" spacing={4}>
      {order?.isArchived && <ArchivedOrderAlert />}
      <GetBackButton
        path={order?.isArchived ? "/archiwum" : "/zgloszenia"}
        label={buttonLabel}
      />
      <OrderDetails order={order!} />
      <OrderManagement order={order!} />
    </VStack>
  );
});

const AdminOrderDetailsWithEB = withErrorBoundary(AdminOrderDetails);

export { AdminOrderDetailsWithEB as AdminOrderDetails };
