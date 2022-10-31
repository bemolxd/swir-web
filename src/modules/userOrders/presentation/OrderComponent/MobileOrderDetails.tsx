import { VStack, Heading } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { SecondaryText } from "components/Typography";

import { OrderStatus } from "../../application";
import { messages } from "../messages";

interface IProps {
  hasDoc: boolean;
  titleWithDoc: string;
  titleNoDoc: string;
  orderStatus: OrderStatus;
}

export const MobileOrderDetails = ({
  hasDoc,
  titleNoDoc,
  titleWithDoc,
  orderStatus,
}: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <VStack w="100%" align="flex-start">
      <Heading size="sm" fontWeight="400">
        {hasDoc ? titleWithDoc : titleNoDoc}
      </Heading>
      <SecondaryText textTransform="uppercase">
        {formatMessage(messages[orderStatus])}
      </SecondaryText>
    </VStack>
  );
};
