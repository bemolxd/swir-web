import { useColorModeValue, VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const SimpleList = ({ children }: IProps) => {
  const border = useColorModeValue("1px solid #CBD5E0", "1px solid #4A5568");

  return (
    <VStack
      align="flex-start"
      spacing={1}
      w="100%"
      borderRadius={4}
      border={border}
      py={1}
    >
      {children}
    </VStack>
  );
};
