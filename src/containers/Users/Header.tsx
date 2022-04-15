import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Card } from "components/Card";

import { FilterSection } from "modules/users/presentation";

export const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <Card maxW="1300px" w="100%">
      <VStack justify="flex-start" align="flex-start" mb={1}>
        <Heading size="md" fontWeight="400">
          {formatMessage({
            id: "Users.header.title",
            defaultMessage: "Użytkownicy",
          })}
        </Heading>
        <Text>
          {formatMessage({
            id: "Users.header.description",
            defaultMessage: "Zbiór wszystkich użytkowników systemu.",
          })}
        </Text>
      </VStack>
      <Divider />
      <FilterSection />
    </Card>
  );
};
