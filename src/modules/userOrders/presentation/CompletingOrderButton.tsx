import { MdOutlineShoppingBag } from "react-icons/md";
import { defineMessages, useIntl } from "react-intl";
import { useNavigate } from "react-router";

import { IconButton } from "components/IconButton";
import { NotificationBadge } from "components/Notifications";
import { useGetContextType, useMeQuery } from "components/Auth";

import { useUserOrdersQuery } from "../infrastructure";
import { defaultParams, OrderStatus } from "../application";

export const CompletingOrderButton = () => {
  const { formatMessage } = useIntl();
  const me = useMeQuery();
  const { isUser } = useGetContextType();
  const orders = useUserOrdersQuery(me?.userId!, defaultParams);
  const navigate = useNavigate();

  const completingOrder = orders?.collection.find(
    (order) => order.status === OrderStatus.COMPLETING
  );
  const hasOrders = !!completingOrder;

  if (!isUser) return null;

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        isRound
        variant="outline"
        icon={<MdOutlineShoppingBag />}
        tooltip={
          hasOrders
            ? formatMessage(messages.hasOrder)
            : formatMessage(messages.noOrders)
        }
        onClick={() => {
          if (hasOrders) {
            navigate(`/zgloszenia/${completingOrder.orderId}`);
            return;
          }

          navigate("/zgloszenia");
        }}
      />
      {hasOrders && <NotificationBadge />}
    </div>
  );
};

const messages = defineMessages({
  noOrders: {
    id: "CompletingOrderButton.noOrders",
    defaultMessage: "Brak kompletowanych zgłoszeń",
  },
  hasOrder: {
    id: "CompletingOrderButton.hasOrder",
    defaultMessage: "Zobacz zgłoszenie",
  },
});
