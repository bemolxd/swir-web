import { HStack, Avatar, VStack, Text } from "@chakra-ui/react";
import { ContextType } from "types";

import { SelectRole } from "../SelectRole";

export interface ItemContentProps {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  contextType: ContextType;
}

export const ItemContent = ({
  firstName,
  lastName,
  email,
  userId,
  contextType,
}: ItemContentProps) => {
  return (
    <HStack w="100%" align="center">
      <HStack spacing={4} w="100%" align="flex-start">
        <Avatar />
        <VStack spacing={0} align="flex-start">
          <Text>{`${firstName} ${lastName}`}</Text>
          <Text textColor="gray.500">{email}</Text>
        </VStack>
      </HStack>
      <SelectRole userId={userId} defaultValue={contextType} />
    </HStack>
  );
};
