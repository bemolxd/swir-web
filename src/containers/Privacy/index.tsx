import { Center, Heading, Stack, VStack } from "@chakra-ui/react";
import { useIntl, defineMessages } from "react-intl";

import { Card } from "components/Card";
import { GetBackButton } from "components/GetBackButton";

import {
  CollectingData,
  Contact,
  DataProtection,
  ExternalLinks,
  InformationDisclosure,
  MainInfo,
  ManagingJustification,
  UserRights,
} from "./sections";

export const Privacy = () => {
  const { formatMessage } = useIntl();

  return (
    <VStack w="100%" spacing={4} align="flex-start">
      <GetBackButton
        label={formatMessage(messages.goBackMain)}
        path="/sprzet"
      />
      <Card w="100%">
        <Center w="100%" textAlign="center" mb={6}>
          <Heading size="lg" fontWeight="500">
            {formatMessage(messages.mainHeader)}
          </Heading>
        </Center>
        <Stack spacing={8}>
          <MainInfo />
          <CollectingData />
          <ManagingJustification />
          <UserRights />
          <ExternalLinks />
          <DataProtection />
          <InformationDisclosure />
          <Contact />
        </Stack>
      </Card>
    </VStack>
  );
};

const messages = defineMessages({
  mainHeader: {
    id: "Privacy.mainHeader",
    defaultMessage: "Polityka Prywatności Systemu Wypożyczeń i Rezerwacji",
  },
  goBackMain: {
    id: "Privacy.goBackMain",
    defaultMessage: "Wróć na stronę główną",
  },
});
