import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const DataProtection = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Center w="100%" textAlign="center" mb={6}>
        <Heading size="md" fontWeight="400">
          {formatMessage(messages.header)}
        </Heading>
      </Center>
      <Stack textAlign="justify">
        <Text>{formatMessage(messages.info)}</Text>
      </Stack>
    </>
  );
};

const messages = defineMessages({
  header: {
    id: "Privacy.DataProtection.header",
    defaultMessage: "V. Ochrona danych",
  },
  info: {
    id: "Privacy.DataProtection.info",
    defaultMessage:
      "Zapewniamy bezpieczeństwo informacji udostępnianych przez Użytkownika na serwerach komputerowych w środowisku kontrolowanym, bezpiecznym, zabezpieczonym przed nieuprawnionym dostępem, wykorzystaniem lub ujawnieniem. W ramach kontroli i nadzoru zastosowanie mają odpowiednie zabezpieczenia administracyjne, techniczne i fizyczne w celu ochrony przed nieuprawnionym dostępem, wykorzystaniem, modyfikacją i ujawnieniem danych osobowych. Nie możemy jednak zagwarantować bezpieczeństwa transmisji danych przez sieć internetową lub bezprzewodową.",
  },
});
