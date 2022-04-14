import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { OrderStatus } from "modules/userOrders/application";

import { StatusMessage } from "./StatusMessage";
import { initMessages, activeMessages, doneMessages } from "./messages";
import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

interface IProps {
  orderStatus: OrderStatus;
}

export const OrderStatusSection = ({ orderStatus }: IProps) => {
  const { formatMessage } = useIntl();

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
            isActive={orderStatus === OrderStatus.COMPLETING}
            isDone={orderStatus !== OrderStatus.COMPLETING}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.pending)}
            activeMessage={formatMessage(activeMessages.pending)}
            doneMessage={formatMessage(doneMessages.pending)}
            isActive={orderStatus === OrderStatus.PENDING}
            isDone={checkDone(OrderStatus.PENDING, orderStatus)}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.awarded)}
            activeMessage={formatMessage(activeMessages.awarded)}
            doneMessage={formatMessage(doneMessages.awarded)}
            isActive={orderStatus === OrderStatus.AWARDED}
            isDone={checkDone(OrderStatus.AWARDED, orderStatus)}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.published)}
            activeMessage={formatMessage(activeMessages.published)}
            doneMessage={formatMessage(doneMessages.published)}
            isActive={orderStatus === OrderStatus.PUBLISHED}
            isDone={checkDone(OrderStatus.PUBLISHED, orderStatus)}
            isVisible={true}
          />
          <StatusMessage
            initMessage={formatMessage(initMessages.finished)}
            activeMessage={formatMessage(activeMessages.finished)}
            doneMessage={formatMessage(doneMessages.finished)}
            isActive={orderStatus === OrderStatus.FINISHED}
            isDone={checkDone(OrderStatus.FINISHED, orderStatus)}
            isVisible={true}
          />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );

  // return (
  //   <>
  //     <HStack w="100%" align="flex-start">
  //       <Text>
  //         {formatMessage({
  //           id: "UserOrderDetails.orderStatus.header",
  //           defaultMessage: "Status zgłoszenia",
  //         })}
  //       </Text>
  //       <StatusMessage
  //         initMessage={formatMessage(initMessages.completing)}
  //         activeMessage={formatMessage(activeMessages.completing)}
  //         doneMessage={formatMessage(doneMessages.completing)}
  //         isActive={orderStatus === OrderStatus.COMPLETING}
  //         isDone={orderStatus !== OrderStatus.COMPLETING}
  //         isVisible={true}
  //       />
  //       <StatusMessage
  //         initMessage={formatMessage(initMessages.pending)}
  //         activeMessage={formatMessage(activeMessages.pending)}
  //         doneMessage={formatMessage(doneMessages.pending)}
  //         isActive={orderStatus === OrderStatus.PENDING}
  //         isDone={checkDone(OrderStatus.PENDING, orderStatus)}
  //         isVisible={true}
  //       />
  //       <StatusMessage
  //         initMessage={formatMessage(initMessages.awarded)}
  //         activeMessage={formatMessage(activeMessages.awarded)}
  //         doneMessage={formatMessage(doneMessages.awarded)}
  //         isActive={orderStatus === OrderStatus.AWARDED}
  //         isDone={checkDone(OrderStatus.AWARDED, orderStatus)}
  //         isVisible={true}
  //       />
  //       <StatusMessage
  //         initMessage={formatMessage(initMessages.published)}
  //         activeMessage={formatMessage(activeMessages.published)}
  //         doneMessage={formatMessage(doneMessages.published)}
  //         isActive={orderStatus === OrderStatus.PUBLISHED}
  //         isDone={checkDone(OrderStatus.PUBLISHED, orderStatus)}
  //         isVisible={true}
  //       />
  //       <StatusMessage
  //         initMessage={formatMessage(initMessages.finished)}
  //         activeMessage={formatMessage(activeMessages.finished)}
  //         doneMessage={formatMessage(doneMessages.finished)}
  //         isActive={orderStatus === OrderStatus.FINISHED}
  //         isDone={checkDone(OrderStatus.FINISHED, orderStatus)}
  //         isVisible={true}
  //       />
  //     </HStack>
  //     <Divider />
  //   </>
  // );
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
