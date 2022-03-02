import { HStack, VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { Navbar } from "components/Navbar";
import { MainNavigation } from "components/MainNavigation";

import { useCheckMobile } from "./useCheckMobile";

interface IProps extends IChildrenProp {}

export const AppLayout = ({ children }: IProps) => {
  const isMobile = useCheckMobile();

  return (
    <>
      <Navbar />
      <VStack w="100%">
        <HStack
          maxW="1500px"
          w="100%"
          minH="80vh"
          mx={isMobile ? 4 : 40}
          mt="72px"
          justify="center"
          align="flex-start"
          spacing={4}
        >
          <MainNavigation />
          {children}
        </HStack>
      </VStack>
    </>
  );
};
