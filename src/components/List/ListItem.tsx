import { VStack } from "@chakra-ui/react";
import { Card } from "components/Card";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  onClick?(): void;
  border?: string;
}

export const ListItem = ({ children, onClick, border }: IProps) => {
  return (
    <Card
      w="100%"
      border={border}
      opacity="1"
      boxShadow="md"
      fade={false}
      transition="opacity ease-in-out 0.1s, box-shadow ease-in-out 0.1s"
      _hover={{
        cursor: onClick ? "pointer" : "auto",
        opacity: "0.85",
        boxShadow: "lg",
        transition: "opacity ease-in-out 0.1s, box-shadow ease-in-out 0.1s",
      }}
      onClick={onClick}
    >
      <VStack w="100%" align="flex-start" justify="center">
        {children}
      </VStack>
    </Card>
  );
};
