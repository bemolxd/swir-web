import { defineMessages, useIntl } from "react-intl";
import { Divider, Text } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { Order } from "modules/userOrders/application";
import { OrderStatusPolicy } from "utils";

interface IProps {
  order: Order;
}

export const AwardingJustificationSection = ({ order }: IProps) => {
  const { formatMessage } = useIntl();

  if (
    OrderStatusPolicy(order.status).isCompleting() ||
    OrderStatusPolicy(order.status).isPending()
  ) {
    return null;
  }

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "AdminOrderDetails.justification.header",
            defaultMessage: "Decyzja",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <Text>
            {order.isRejected
              ? formatMessage(messages.rejected)
              : formatMessage(messages.accepted)}
          </Text>
          <Text>{order.techComment}</Text>
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};

const messages = defineMessages({
  rejected: {
    id: "Order.rejected",
    defaultMessage: "Zgłoszenie odrzucono",
  },
  accepted: {
    id: "Order.accepted",
    defaultMessage: "Zgłoszenie zaakceptowano",
  },
});
