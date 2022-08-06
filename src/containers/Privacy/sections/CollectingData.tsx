import {
  Center,
  Heading,
  OrderedList,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
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
        <Text>{formatMessage(messages.listHeader)}</Text>
        <OrderedList paddingStart={4}>
          {Object.keys(listMessages).map((message, index) => (
            <ListItem key={index}>
              {/* @ts-ignore */}
              <Text>{formatMessage(listMessages[message])}</Text>
            </ListItem>
          ))}
        </OrderedList>
      </Stack>
    </>
  );
};

const messages = defineMessages({
  header: {
    id: "Privacy.CollectingData.header",
    defaultMessage: "I. Zbieranie danych osobowych",
  },
  listHeader: {
    id: "Privacy.CollectingData.listHeader",
    defaultMessage:
      "Następujące rodzaje danych osobowych mogą być gromadzone, przechowywane i wykorzystywane:",
  },
});

const listMessages = defineMessages({
  register: {
    id: "Privacy.CollectingData.register",
    defaultMessage:
      "informacje, takie jak imię, nazwisko, adres e-mail, które podajesz podczas rejestracji poprzez logowanie za pomocą Centralnego Punktu Logowania PG;",
  },
  services: {
    id: "Privacy.CollectingData.services",
    defaultMessage:
      "informacje wprowadzane podczas korzystania z usług oferowanych przez System;",
  },
});
