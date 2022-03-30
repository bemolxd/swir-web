import { Grid as ChakraGrid } from "@chakra-ui/react";
import { GridProps } from "@chakra-ui/styled-system";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  templateColumns?: GridProps["gridTemplateColumns"];
  templateRows?: GridProps["gridTemplateRows"];
  gap?: GridProps["gridGap"];
}

export const Grid = ({
  templateColumns = "repeat(5, 1fr)",
  templateRows,
  gap = 2,
  children,
}: IProps) => {
  return (
    <ChakraGrid
      templateColumns={templateColumns}
      templateRows={templateRows}
      gap={gap}
      w="100%"
    >
      {children}
    </ChakraGrid>
  );
};
