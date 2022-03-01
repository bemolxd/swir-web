import { HStack } from "@chakra-ui/react";

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
      <HStack
        minH="100vh"
        mx={isMobile ? 4 : 40}
        mt="72px"
        justify="flex-start"
        align="flex-start"
        spacing={4}
      >
        <MainNavigation />
        {children}
      </HStack>
    </>
  );
};
