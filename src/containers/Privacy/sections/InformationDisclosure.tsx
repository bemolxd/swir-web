import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const InformationDisclosure = () => {
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
    id: "Privacy.InformationDisclosure.header",
    defaultMessage: "VI. Ujawnienie informacji wynikających z przepisów prawa",
  },
  info: {
    id: "Privacy.InformationDisclosure.info",
    defaultMessage:
      "Wszelkie informacje  gromadzone, wykorzystywane lub otrzymywane w ramach funkcjonowania Systemu, zostaną ujawnione, jeśli jest to wymagane lub zgodne z prawem, np. w celu wywiązania się z wezwania do sądu lub podobnego postępowania prawnego oraz wówczas, gdy w dobrej wierze uznamy, że ujawnienie jest koniecznie w celu ochrony naszych praw, Twojego bezpieczeństwa lub bezpieczeństwa innych osób, wykrycia oszustwa lub w odpowiedzi na wezwanie organów rządowych.",
  },
});
