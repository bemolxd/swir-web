import { VStack, Text } from "@chakra-ui/react";

import { SecondaryText } from "components/Typography";

interface IProps {
  property: string;
  value: string | number;
}

export const BasicPropertyInfo = ({ property, value }: IProps) => {
  return (
    <VStack align="flex-start" spacing={0}>
      <Text>{value}</Text>
      <SecondaryText
        fontSize="sm"
        textTransform="uppercase"
        textColor="gray.400"
      >
        {property}
      </SecondaryText>
    </VStack>
  );
};
