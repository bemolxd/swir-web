import { useIntl } from "react-intl";
import { HStack, VStack } from "@chakra-ui/react";
import { OrderStatusPolicy } from "utils";

import {
  InfoDetailsContainer,
  InfoDetailsLabel,
  InfoDetailsContent,
} from "components/Card";
import { useCheckMobile } from "components/Layout";

import { Order } from "modules/userOrders/application";

import { RejectButton } from "./Rejecting/RejectButton";
import { AcceptButton } from "./Accepting/AcceptButton";

interface IProps {
  order: Order;
}

export const AwardingSection = ({ order }: IProps) => {
  const { formatMessage } = useIntl();
  const isMobile = useCheckMobile();

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
        {isMobile ? (
          <VStack w="100%" spacing={2} mt={1}>
            <RejectButton orderId={order.orderId} />
            <AcceptButton order={order} />
          </VStack>
        ) : (
          <HStack w="100%" justify="flex-end" spacing={4}>
            <RejectButton orderId={order.orderId} />
            <AcceptButton order={order} />
          </HStack>
        )}
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
