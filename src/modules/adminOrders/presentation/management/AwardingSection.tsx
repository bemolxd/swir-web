import { useIntl } from "react-intl";
import { HStack } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsLabel,
  InfoDetailsContent,
} from "components/Card";

import { Order } from "modules/userOrders/application";
import { RejectButton } from "./Rejecting/RejectButton";
import { OrderStatusPolicy } from "utils";
import { AcceptButton } from "./Accepting/AcceptButton";

interface IProps {
  order: Order;
}

export const AwardingSection = ({ order }: IProps) => {
  const { formatMessage } = useIntl();

  if (!OrderStatusPolicy(order.status).isPending()) return null;

  return (
    <InfoDetailsContainer>
      <InfoDetailsLabel>
        {formatMessage({
          id: "AdminOrderManagement.awardingSection.header",
          defaultMessage: "Procesuj zgłoszenie",
        })}
      </InfoDetailsLabel>
      <InfoDetailsContent>
        <HStack w="100%" justify="flex-end" spacing={4}>
          <RejectButton orderId={order.orderId} />
          <AcceptButton order={order} />
        </HStack>
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
