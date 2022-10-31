import { Center, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const Contact = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Center w="100%" textAlign="center" mb={6}>
        <Heading size="md" fontWeight="400">
          {formatMessage(messages.header)}
        </Heading>
      </Center>
      <Stack textAlign="justify">
        <Text>
          {formatMessage(messages.info, {
            contactLink: (
              <Link href="https://multimed.org/kontakt" target="_blank">
                tym linkiem
              </Link>
            ),
          })}
        </Text>
      </Stack>
    </>
  );
};

const messages = defineMessages({
  header: {
    id: "Privacy.Contact.header",
    defaultMessage: "VII. Informacje kontaktowe",
  },
  info: {
    id: "Privacy.Contact.info",
    defaultMessage:
      "Jeżeli chcesz się z nami skontaktować, aby uzyskać więcej informacji na temat niniejszej Polityki Prywatności lub w jakiejkolwiek sprawie mającej związek z Twoimi prawami i danymi osobowymi, możesz wysłać wiadomość e-mail na adres webmaster@multimed.org. Więcej informacji kontaktowych znajdziesz pod {contactLink}.",
  },
});
