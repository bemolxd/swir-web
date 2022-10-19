import {
  GridItem as ChakraGridItem,
  GridItemProps,
  VStack,
} from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { Card } from "components/Card";

interface IProps extends IChildrenProp {
  colSpan: GridItemProps["colSpan"];
  onClick?(): void;
}

export const GridItem = ({ colSpan, onClick, children }: IProps) => {
  return (
    <ChakraGridItem colSpan={colSpan}>
      <Card
        w="100%"
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
        h="100%"
      >
        <VStack w="100%" align="flex-start" justify="center" h="100%">
          {children}
        </VStack>
      </Card>
    </ChakraGridItem>
  );
};
