import { Divider, Heading, Text, VStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <VStack justify="flex-start" align="flex-start" mb={4}>
      <Heading size="md" fontWeight="400">
        Baza sprzętu KSM
      </Heading>
      <Text>Poniżej znajdziesz zasoby Katedry Systemów Multimedialnych.</Text>
      <Divider />
    </VStack>
  );
};
