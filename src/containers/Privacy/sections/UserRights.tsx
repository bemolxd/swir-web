import {
  Center,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const UserRights = () => {
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
        <UnorderedList paddingStart={4}>
          {Object.keys(listMessages).map((message, idx) => (
            <ListItem key={idx}>
              {/* @ts-ignore */}
              <Text>{formatMessage(listMessages[message])}</Text>
            </ListItem>
          ))}
        </UnorderedList>
        <Text>{formatMessage(messages.contact)}</Text>
        <Text>{formatMessage(messages.orders)}</Text>
      </Stack>
    </>
  );
};

const messages = defineMessages({
  header: {
    id: "Privacy.UserRights.header",
    defaultMessage: "III. Twoje prawa",
  },
  listHeader: {
    id: "Privacy.UserRights.listHeader",
    defaultMessage:
      "Jeśli jesteś obywatelem Unii Europejskiej, przysługują Ci następujące prawa związane z Twoimi danymi osobowymi:",
  },
  contact: {
    id: "Privacy.UserRights.contact",
    defaultMessage:
      "Jeśli chcesz skorzystać z tego prawa, skontaktuj się z nami za pośrednictwem poniższych danych kontaktowych.",
  },
  orders: {
    id: "Privacy.UserRights.orders",
    defaultMessage:
      "Ponadto, jeśli jesteś obywatelem Unii Europejskiej, zaznaczamy, że dane użytkownika mogą być przetwarzane w celu realizacji ewentualnych umów z nim zawartych (np. w przypadku przesłania zgłoszenia za pośrednictwem Strony).",
  },
});

const listMessages = defineMessages({
  obtain: {
    id: "Privacy.UserRight.rightsList.obtain",
    defaultMessage: "Prawo do uzyskania informacji,",
  },
  access: {
    id: "Privacy.UserRight.rightsList.access",
    defaultMessage: "Prawo dostępu do informacji,",
  },
  correction: {
    id: "Privacy.UserRights.rightsList.correction",
    defaultMessage: "Prawo do korekty danych,",
  },
  deleting: {
    id: "Privacy.UserRights.rightsList.deleting",
    defaultMessage: "Prawo do usunięcia danych,",
  },
  restriction: {
    id: "Privacy.UserRights.rightsList.restriction",
    defaultMessage: "Prawo do ograniczenia przetwarzania danych,",
  },
  methodReservation: {
    id: "Privacy.UserRights.rightsList.methodReservation",
    defaultMessage: "Prawo do zastrzeżenia sposobu przetwarzania danych,",
  },
  objection: {
    id: "Privacy.UserRights.rightsList.objection",
    defaultMessage: "Prawo sprzeciwu,",
  },
  automatization: {
    id: "Privacy.UserRights.rightsList.automatization",
    defaultMessage:
      "Prawa odnoszące się do automatyzacji podejmowania decyzji i profilowania.",
  },
});
