import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export const Header = () => {
  const { formatMessage } = useIntl();
  return (
    <VStack justify="flex-start" align="flex-start" mb={4}>
      <Heading size="md" fontWeight="400">
        {formatMessage({
          id: "Items.header.title",
          defaultMessage: "Baza sprzętu KSM",
        })}
      </Heading>
      <Text>
        {formatMessage({
          id: "Items.header.description",
          defaultMessage:
            "Poniżej znajdziesz zasoby Katedry Systemów Multimedialnych.",
        })}
      </Text>
      <Divider />
    </VStack>
  );
};
