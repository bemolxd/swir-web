import { HStack, StackProps } from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { useCheckMobile } from "components/Layout";

interface IProps extends IChildrenProp, Omit<StackProps, "children"> {}

export const FiltersContainer = ({ children, ...props }: IProps) => {
  const isMobile = useCheckMobile();

  return (
    <HStack
      {...props}
      justify={isMobile ? "center" : "flex-end"}
      w="100%"
      spacing={2}
    >
      {children}
    </HStack>
  );
};
