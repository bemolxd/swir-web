import { HStack, Center, chakra, VStack } from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { Navbar } from "components/Navbar";
import { MainNavigation } from "components/MainNavigation";
import { useCookiesNotification } from "components/Cookies";

import { ScrollTopButton } from "./ScrollTopButton";
import { useCheckMobile } from "./useCheckMobile";

interface IProps extends IChildrenProp {}

export const AppLayout = ({ children }: IProps) => {
  useCookiesNotification();
  const isMobile = useCheckMobile();

  return (
    <chakra.div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Navbar />
      <Center w="100%" px={{ base: 4, lg: 20, xl: 40 }} pb={16}>
        <HStack
          maxW="1500px"
          w="100%"
          minH="80vh"
          mt="72px"
          justify="flex-start"
          align="flex-start"
          spacing={4}
        >
          {!isMobile && (
            <VStack maxW="200px" width="100%" h="100%">
              <MainNavigation />
            </VStack>
          )}
          {children}
        </HStack>
      </Center>
      <ScrollTopButton />
    </chakra.div>
  );
};
