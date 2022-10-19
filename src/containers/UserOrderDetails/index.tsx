import { VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";
import { withSuspense } from "components/RemoteData";
import { GetBackButton } from "components/GetBackButton";

import { useOrderQuery } from "modules/userOrders/infrastructure";
import { ArchivedOrderAlert } from "modules/userOrders/presentation";

import { Content } from "./Content";

const UserOrderDetails = withSuspense(() => {
  const { orderId } = useParams<{ orderId: string }>();
  const orderDetails = useOrderQuery(orderId!);
  const { formatMessage } = useIntl();

  const buttonLabel = orderDetails?.isArchived
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
      {orderDetails?.isArchived && <ArchivedOrderAlert />}
      <GetBackButton
        path={orderDetails?.isArchived ? "/archiwum" : "/zgloszenia"}
        label={buttonLabel}
      />
      <Card maxW="1300px" w="100%">
        <Content orderDetails={orderDetails} />
      </Card>
    </VStack>
  );
});

const UserOrderDetailsWithEB = withErrorBoundary(UserOrderDetails);

export { UserOrderDetailsWithEB as UserOrderDetails };
