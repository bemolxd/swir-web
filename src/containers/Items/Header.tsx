import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Card } from "components/Card";

import { FilterSection } from "modules/items/presentation";

export const Header = () => {
  const { formatMessage } = useIntl();
  return (
    <Card maxW="1300px" w="100%">
      <VStack justify="flex-start" align="flex-start" mb={1}>
        <Heading size="md" fontWeight="400">
          {formatMessage({
            id: "Items.header.title",
            defaultMessage: "Baza sprzętu KSM",
          })}
        </Heading>
        <Text>
          {formatMessage({
            id: "Items.header.description",
            defaultMessage:
              "Poniżej znajdziesz zasoby Katedry Systemów Multimedialnych.",
          })}
        </Text>
        <Divider />
      </VStack>
      <FilterSection />
    </Card>
  );
};
