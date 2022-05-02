import { HStack, Center } from "@chakra-ui/react";

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
      <Center w="100%" px={isMobile ? 4 : 40} pb={16}>
        <HStack
          maxW="1500px"
          w="100%"
          minH="80vh"
          mt="72px"
          justify="flex-start"
          align="flex-start"
          spacing={4}
        >
          <MainNavigation />
          {children}
        </HStack>
      </Center>
    </>
  );
};
