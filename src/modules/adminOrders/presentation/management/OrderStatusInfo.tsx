import { useIntl } from "react-intl";
import { Text, Divider } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { OrderStatus } from "modules/userOrders/application";
import { messages } from "modules/userOrders/presentation";

interface IProps {
  status: OrderStatus;
}

export const OrderStatusInfo = ({ status }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "AdminOrderManagement.orderStatus.header",
            defaultMessage: "Status",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <Text>{formatMessage(messages[status])}</Text>
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
