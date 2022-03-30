import { VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const List = ({ children }: IProps) => {
  return (
    <VStack align="flex-start" spacing={2} w="100%">
      {children}
    </VStack>
  );
};
