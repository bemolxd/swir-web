import { Divider, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useCheckMobile } from "components/Layout";
import { Card } from "components/Card";

import { FilterSection } from "modules/items/presentation";

import { CreateItemButton } from "./CreateItemButton";

export const Header = () => {
  const { formatMessage } = useIntl();
  const isMobile = useCheckMobile();

  return (
    <Card maxW="1300px" w="100%">
      <Stack
        w="100%"
        justify="space-between"
        align={isMobile ? "flex-end" : "center"}
        mb={2}
        flexDir={isMobile ? "column" : "row"}
      >
        <VStack justify="flex-start" align="flex-start">
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
        </VStack>
        <CreateItemButton />
      </Stack>
      <Divider />
      <FilterSection />
    </Card>
  );
};
