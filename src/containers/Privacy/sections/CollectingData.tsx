import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const CollectingData = () => {
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
    id: "Privacy.CollectingData.header",
    defaultMessage: "I. Zbieranie danych osobowych",
  },
  info: {
    id: "Privacy.CollectingData.info",
    defaultMessage:
      "Kiedy pierwszy raz logujesz się do Systemu Wypożyczeń i Rezerwacji, automatycznie przekazywane są dane, które podałeś podczas rejestracji w systemie MojaPG, takie jak: imię, nazwisko oraz adres email. Dodatkowo, możesz zdecydować się na przekazanie dodatkowych danych potrzebnych do realizacji niektórych usług oferowanych przez System (np. podczas przesyłania zgłoszenia). Ponadto, Strona zbiera pewne informacje o Twoim urządzeniu, w tym informacje o Twojej przeglądarce i niektórych plikach cookie zainstalowanych na Twoim urządzeniu.",
  },
});
