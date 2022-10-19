import { useIntl } from "react-intl";
import { Text } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { Order } from "modules/userOrders/application";

interface IProps {
  order: Order;
}

export const SenderDetailsCommentSection = ({ order }: IProps) => {
  const { formatMessage } = useIntl();

  if (!order.senderComment) return null;

  return (
    <InfoDetailsContainer>
      <InfoDetailsLabel>
        {formatMessage({
          id: "UserOrderDetails.senderComment.header",
          defaultMessage: "Przesłany komentarz",
        })}
      </InfoDetailsLabel>
      <InfoDetailsContent>
        <Text whiteSpace="pre-wrap">{order.senderComment}</Text>
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
