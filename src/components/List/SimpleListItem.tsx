import { HStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  onClick?(): void;
}

export const SimpleListItem = ({ children, onClick }: IProps) => {
  return (
    <HStack
      w="100%"
      borderRadius={4}
      p={2}
      opacity="1"
      transition="opacity ease-in-out 0.1s, box-shadow ease-in-out 0.1s"
      _hover={{
        cursor: onClick ? "pointer" : "auto",
        opacity: "0.85",
        boxShadow: "lg",
        transition: "opacity ease-in-out 0.1s, box-shadow ease-in-out 0.1s",
      }}
      onClick={onClick}
    >
      {children}
    </HStack>
  );
};
