import { HStack, Avatar, VStack, Heading, Text } from "@chakra-ui/react";

import { EmailButton } from "./EmailButton";
import { InfoContentProps } from "./InfoContent";

export const MobileInfoContent = ({
  firstName,
  lastName,
  email,
}: InfoContentProps) => {
  return (
    <HStack w="100%" justify="space-between" align="flex-start" mb={4}>
      <HStack align="flex-start" spacing={4} w="100%">
        <Avatar size="lg" />
        <VStack align="flex-start" w="100%">
          <Heading
            fontWeight="400"
            size="lg"
          >{`${firstName} ${lastName}`}</Heading>
          <Text textColor="gray.500" isTruncated>
            {email}
          </Text>
          <HStack w="100%" justify="flex-end">
            <EmailButton email={email} />
          </HStack>
        </VStack>
      </HStack>
    </HStack>
  );
};
