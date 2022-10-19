import { OrderStatusPolicy } from "utils";
import { useIntl } from "react-intl";

import { Order } from "modules/userOrders/application";
import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";
import { FinishButton } from "./Finishing/FinishButton";

interface IProps {
  order: Order;
}

export const FinishSection = ({ order }: IProps) => {
  const { formatMessage } = useIntl();

  if (
    !OrderStatusPolicy(order.status).isActive() ||
    OrderStatusPolicy(order.status).isPending() ||
    order.isRejected
  )
    return null;

  return (
    <InfoDetailsContainer>
      <InfoDetailsLabel>
        {formatMessage({
          id: "AdminOrderManagement.finishSection.header",
          defaultMessage: "Zakończ zgłoszenie",
        })}
      </InfoDetailsLabel>
      <InfoDetailsContent align="flex-end">
        <FinishButton orderId={order.orderId} />
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
