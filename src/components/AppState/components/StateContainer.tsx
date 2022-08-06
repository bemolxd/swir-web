import { StackProps, VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  my?: StackProps["my"];
}

export const StateContainer = ({ my = 24, children }: IProps) => {
  return (
    <VStack my={my} spacing={4} w="100%" maxW="1300px">
      {children}
    </VStack>
  );
};
