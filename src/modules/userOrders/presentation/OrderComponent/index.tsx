import { useIntl } from "react-intl";
import { HStack, Heading, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { ListItem } from "components/List";

import { Order } from "modules/userOrders/application";

import { messages } from "./messages";
import { CopyLinkButton } from "./CopyLinkButton";

interface IProps {
  order: Order;
}

export const OrderComponent = ({ order }: IProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  return (
    <ListItem onClick={() => navigate(`/zgloszenia/${order.orderId}`)}>
      <HStack w="100%" align="center">
        <VStack w="100%" align="flex-start">
          <Heading size="sm" fontWeight="400">
            {formatMessage(
              {
                id: "UserOrders.orderComponent.title",
                defaultMessage: "Zgłoszenie nr {orderId}",
              },
              { orderId: order.orderId }
            )}
          </Heading>
          <Text textTransform="uppercase" textColor="gray.500">
            {formatMessage(messages[order.status])}
          </Text>
        </VStack>
        <CopyLinkButton orderId={order.orderId} />
      </HStack>
    </ListItem>
  );
};
