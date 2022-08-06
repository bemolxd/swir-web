import { Center, Heading, Stack } from "@chakra-ui/react";
import { useIntl, defineMessages } from "react-intl";

import { Card } from "components/Card";

import { CollectingData, MainInfo } from "./sections";

export const Privacy = () => {
  const { formatMessage } = useIntl();

  return (
    <Card w="100%">
      <Center w="100%" textAlign="center" mb={6}>
        <Heading size="lg" fontWeight="500">
          {formatMessage(messages.mainHeader)}
        </Heading>
      </Center>
      <Stack spacing={8}>
        <MainInfo />
        <CollectingData />
      </Stack>
    </Card>
  );
};

const messages = defineMessages({
  mainHeader: {
    id: "Privacy.mainHeader",
    defaultMessage: "Polityka prywatności Systemu Wypożyczeń i Rezerwacji",
  },
});
