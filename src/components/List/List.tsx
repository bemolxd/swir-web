import { VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  isGrid?: boolean;
}

export const List = ({ children }: IProps) => {
  return (
    <VStack align="flex-start" spacing={4} w="100%">
      {children}
    </VStack>
  );
};
