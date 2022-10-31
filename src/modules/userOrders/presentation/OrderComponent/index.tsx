import { useIntl } from "react-intl";
import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { OrderStatusPolicy } from "utils";

import { useGetContextType } from "components/Auth";
import { ListItem } from "components/List";
import { useCheckMobile } from "components/Layout";

import { Order } from "modules/userOrders/application";

import { CopyLinkButton } from "./CopyLinkButton";
import { RegularOrderDetails } from "./RegularOrderDetails";
import { MobileOrderDetails } from "./MobileOrderDetails";

interface IProps {
  order: Order;
}

export const OrderComponent = ({ order }: IProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const isPending = OrderStatusPolicy(order.status).isPending();
  const { isUser } = useGetContextType();
  const showBorder = isPending && !isUser;
  const isMobile = useCheckMobile();

  const titleWithDoc = formatMessage(
    {
      id: "UserOrders.orderComponent.titleWithDoc",
      defaultMessage: "Zgłoszenie nr {orderDoc}",
    },
    { orderDoc: order.orderDoc }
  );
  const titleNoDoc = order.isArchived
    ? formatMessage({
        id: "UserOrders.orderComponent.titleNoDoc.archived",
        defaultMessage: "Archiwizowane nieopublikowane zgłoszenie",
      })
    : formatMessage({
        id: "UserOrders.orderComponent.titleNoDoc.notArchived",
        defaultMessage: "Nowe nieopublikowane zgłoszenie",
      });

  return (
    <ListItem
      onClick={() => navigate(`/zgloszenia/${order.orderId}`)}
      border={showBorder ? "1px solid tomato" : undefined}
    >
      <HStack w="100%" align="center">
        {!isMobile ? (
          <RegularOrderDetails
            hasDoc={!!order.orderDoc}
            titleNoDoc={titleNoDoc}
            titleWithDoc={titleWithDoc}
            orderStatus={order.status}
            orderId={order.orderId}
          />
        ) : (
          <MobileOrderDetails
            hasDoc={!!order.orderDoc}
            titleNoDoc={titleNoDoc}
            titleWithDoc={titleWithDoc}
            orderStatus={order.status}
          />
        )}
        <CopyLinkButton orderId={order.orderId} />
      </HStack>
    </ListItem>
  );
};
