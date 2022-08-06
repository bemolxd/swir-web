import { useIntl } from "react-intl";
import { HStack, Heading, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { OrderStatusPolicy } from "utils";

import { useGetContextType } from "components/Auth";
import { ListItem } from "components/List";

import { Order } from "modules/userOrders/application";

import { messages } from "../messages";
import { CopyLinkButton } from "./CopyLinkButton";

interface IProps {
  order: Order;
}

export const OrderComponent = ({ order }: IProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const isPending = OrderStatusPolicy(order.status).isPending();
  const { isUser } = useGetContextType();
  const showBorder = isPending && !isUser;

  return (
    <ListItem
      onClick={() => navigate(`/zgloszenia/${order.orderId}`)}
      border={showBorder ? "1px solid tomato" : undefined}
    >
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
