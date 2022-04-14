import { HStack, VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const InfoDetailsContainer = ({ children }: IProps) => {
  const isMobile = useCheckMobile();

  if (isMobile)
    return (
      <VStack w="100%" align="flex-start" spacing={2} py={2}>
        {children}
      </VStack>
    );

  return (
    <HStack w="100%" align="flex-start" spacing={2} py={2}>
      {children}
    </HStack>
  );
};
