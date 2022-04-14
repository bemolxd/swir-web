import { VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  align?: "flex-start" | "flex-end";
}

export const InfoDetailsContent = ({
  children,
  align = "flex-start",
}: IProps) => {
  return (
    <VStack w="100%" align={align}>
      {children}
    </VStack>
  );
};
