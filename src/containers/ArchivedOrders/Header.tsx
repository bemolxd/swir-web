import { VStack, Heading, Divider, Text } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Card } from "components/Card";

import { OrderFilters } from "modules/adminOrders/presentation";

export const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <Card maxW="1300px" w="100%">
      <VStack justify="flex-start" align="flex-start">
        <Heading size="md" fontWeight="400">
          {formatMessage({
            id: "ArchivedOrders.header.title",
            defaultMessage: "Archiwum zgłoszeń",
          })}
        </Heading>
        <Text>
          {formatMessage({
            id: "ArchivedOrders.header.description",
            defaultMessage: "Poniżej znajdziesz zarchiwizowane zgłoszenia.",
          })}
        </Text>
        <Divider />
        <OrderFilters />
      </VStack>
    </Card>
  );
};
