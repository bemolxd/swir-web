import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const ExternalLinks = () => {
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
    id: "Privacy.ExternalLinks.header",
    defaultMessage: "IV. Linki do innych stron",
  },
  info: {
    id: "Privacy.ExternalLinks.info",
    defaultMessage:
      "W Systemie mogą znajdować się linki do innych witryn, które nie stanowią własności ani nie są nadzorowane przez Administratora. Informujemy, że Katedra Systemów Multimedialnych nie ponosi odpowiedzialności za inne strony internetowe ani za ich praktyki związane z ochroną prywatności. Z tego powodu zachęcamy do świadomego opuszczenia naszej strony i zapoznania się z polityką prywatności każdej strony internetowej, która może gromadzić dane osobowe.",
  },
});
