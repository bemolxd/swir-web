import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const ManagingJustification = () => {
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
    id: "Privacy.ManagingData.header",
    defaultMessage: "II. Dlaczego przetwarzamy Twoje dane",
  },
  info: {
    id: "Privacy.ManagingData.info",
    defaultMessage:
      "Nadrzędnym priorytetem Właściciela Systemu jest zapewnienie bezpieczeństwa danych Użytkowników, dlatego też może przetwarzać jedynie ograniczone dane, tylko w takim zakresie, w jakim jest to absolutnie konieczne do utrzymania funkcjonowania Systemu. Informacje zbierane automatycznie są wykorzystywane wyłącznie do identyfikacji potencjalnych przypadków nadużyć oraz do sporządzania danych statystycznych dotyczących korzystania z naszej Strony internetowej. Wspomniane dane statystyczne nie są gromadzone w sposób umożliwiający identyfikację konkretnego użytkownika systemu.",
  },
});
