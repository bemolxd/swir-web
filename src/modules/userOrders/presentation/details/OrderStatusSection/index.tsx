import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Order, OrderStatus } from "modules/userOrders/application";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { StatusMessage } from "./StatusMessage";
import { initMessages, activeMessages, doneMessages } from "./messages";
interface IProps {
  order: Order;
}

export const OrderStatusSection = ({ order }: IProps) => {
  const { formatMessage } = useIntl();
  const { status, isRejected } = order;

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderDetails.orderStatus.header",
            defaultMessage: "Status zgłoszenia",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <StatusMessage
            initMessage={formatMessage(initMessages.completing)}
            activeMessage={formatMessage(activeMessages.completing)}
            doneMessage={formatMessage(doneMessages.completing)}
            isActive={status === OrderStatus.COMPLETING}
            isDone={status !== OrderStatus.COMPLETING}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.pending)}
            activeMessage={formatMessage(activeMessages.pending)}
            doneMessage={formatMessage(doneMessages.pending)}
            isActive={status === OrderStatus.PENDING}
            isDone={checkDone(OrderStatus.PENDING, status)}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.awarded)}
            activeMessage={formatMessage(activeMessages.awarded)}
            doneMessage={formatMessage(doneMessages.awarded)}
            isActive={status === OrderStatus.AWARDED}
            isDone={checkDone(OrderStatus.AWARDED, status)}
            isVisible={true}
            isRejected={isRejected}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.published)}
            activeMessage={formatMessage(activeMessages.published)}
            doneMessage={formatMessage(doneMessages.published)}
            isActive={status === OrderStatus.PUBLISHED}
            isDone={checkDone(OrderStatus.PUBLISHED, status)}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.finished)}
            activeMessage={formatMessage(activeMessages.finished)}
            doneMessage={formatMessage(doneMessages.finished)}
            isDone={status === OrderStatus.FINISHED}
            isVisible={true}
          />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};

const checkDone = (status: OrderStatus, activeStatus: OrderStatus) => {
  const statuses = [
    "completing",
    "pending",
    "awarded",
    "published",
    "finished",
  ];

  const statusIdx = statuses.findIndex((s) => s === status);

  const activeIdx = statuses.findIndex((s) => s === activeStatus);

  return statusIdx <= activeIdx;
};
