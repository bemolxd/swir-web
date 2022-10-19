import { Tag, HStack, Spinner } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { availabilityMessages } from "./messages";

export const AvailabilityTagSuspense = () => {
  const { formatMessage } = useIntl();

  return (
    <Tag size={"md"}>
      <HStack>
        <span>{formatMessage(availabilityMessages.suspense)}</span>
        <Spinner size="xs" />
      </HStack>
    </Tag>
  );
};
