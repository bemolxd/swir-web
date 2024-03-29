import { HStack, Avatar, VStack, Text } from "@chakra-ui/react";

import { SecondaryText } from "components/Typography";

import { SelectRole } from "../SelectRole";
import { ItemContentProps } from "./ItemContent";

interface IProps extends ItemContentProps {}

export const MobileItemContent = ({
  firstName,
  lastName,
  email,
  userId,
  contextType,
}: IProps) => {
  return (
    <VStack w="100%" align="flex-start" spacing={4} justify="center">
      <HStack spacing={4} w="100%" align="flex-start">
        <Avatar />
        <VStack spacing={0} align="flex-start">
          <Text>{`${firstName} ${lastName}`}</Text>
          <SecondaryText>{email}</SecondaryText>
        </VStack>
      </HStack>
      <SelectRole userId={userId} defaultValue={contextType} />
    </VStack>
  );
};
