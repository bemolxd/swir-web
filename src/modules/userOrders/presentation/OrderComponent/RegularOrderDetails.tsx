import { VStack, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { SecondaryText } from "components/Typography";

import { OrderStatus } from "../../application";
import { messages } from "../messages";

interface IProps {
  hasDoc: boolean;
  titleWithDoc: string;
  titleNoDoc: string;
  orderStatus: OrderStatus;
  orderId: string;
}

export const RegularOrderDetails = ({
  hasDoc,
  titleNoDoc,
  titleWithDoc,
  orderStatus,
  orderId,
}: IProps) => {
  const { formatMessage } = useIntl();

  const oidColor = useColorModeValue("gray.300", "gray.600");

  return (
    <VStack w="100%" align="flex-start">
      <HStack w="100%">
        <Heading size="sm" fontWeight="400">
          {hasDoc ? titleWithDoc : titleNoDoc}
        </Heading>
        <SecondaryText textColor={oidColor}>{orderId}</SecondaryText>
      </HStack>
      <SecondaryText textTransform="uppercase">
        {formatMessage(messages[orderStatus])}
      </SecondaryText>
    </VStack>
  );
};
