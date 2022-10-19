import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";

import { SecondaryText } from "components/Typography";

import { EmailButton } from "./EmailButton";

export interface InfoContentProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const InfoContent = ({
  firstName,
  lastName,
  email,
}: InfoContentProps) => {
  return (
    <HStack w="100%" justify="space-between" align="flex-start" mb={4}>
      <HStack align="flex-start" spacing={8}>
        <Avatar size="2xl" />
        <VStack align="flex-start">
          <Heading
            fontWeight="400"
            size="lg"
          >{`${firstName} ${lastName}`}</Heading>
          <SecondaryText>{email}</SecondaryText>
        </VStack>
      </HStack>
      <EmailButton email={email} />
    </HStack>
  );
};
