import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
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
            id: "AdminOrders.header.title",
            defaultMessage: "Zgłoszenia",
          })}
        </Heading>
        <Text>
          {formatMessage({
            id: "AdminOrders.header.description",
            defaultMessage: "Poniżej znajdziesz aktywne zgłoszenia.",
          })}
        </Text>
        <Divider />
        <OrderFilters />
      </VStack>
    </Card>
  );
};
