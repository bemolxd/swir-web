import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Card } from "components/Card";

import { FilterSection } from "modules/userOrders/presentation";

export const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <Card maxW="1300px" w="100%">
      <VStack justify="flex-start" align="flex-start" mb={1}>
        <Heading size="md" fontWeight="400">
          {formatMessage({
            id: "UserOrders.header.title",
            defaultMessage: "Zgłoszenia",
          })}
        </Heading>
        <Text>
          {formatMessage({
            id: "UserOrders.header.description",
            defaultMessage: "Poniżej znajdziesz swoje zgłoszenia.",
          })}
        </Text>
        <Divider />
      </VStack>
      <FilterSection />
    </Card>
  );
};
