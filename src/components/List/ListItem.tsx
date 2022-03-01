import { VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  onClick?(): void;
}

export const ListItem = ({ children, onClick }: IProps) => {
  return (
    <VStack
      w="100%"
      borderRadius={8}
      p={4}
      boxShadow="md"
      align="flex-start"
      justify="center"
      opacity="1"
      transition="opacity ease-in-out 0.1s, box-shadow ease-in-out 0.1s"
      _hover={{
        cursor: onClick ? "pointer" : "auto",
        opacity: "0.65",
        boxShadow: "lg",
        transition: "opacity ease-in-out 0.1s, box-shadow ease-in-out 0.1s",
      }}
      onClick={onClick}
    >
      {children}
    </VStack>
  );
};
