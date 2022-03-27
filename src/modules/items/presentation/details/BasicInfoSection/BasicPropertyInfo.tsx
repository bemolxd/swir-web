import { VStack, Text } from "@chakra-ui/react";

interface IProps {
  property: string;
  value: string | number;
}

export const BasicPropertyInfo = ({ property, value }: IProps) => {
  return (
    <VStack align="flex-start" spacing={0}>
      <Text>{value}</Text>
      <Text fontSize="sm" textTransform="uppercase" textColor="gray.400">
        {property}
      </Text>
    </VStack>
  );
};
