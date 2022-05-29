import { HStack, Center } from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { Navbar } from "components/Navbar";
import { MainNavigation } from "components/MainNavigation";

interface IProps extends IChildrenProp {}

export const AppLayout = ({ children }: IProps) => {
  return (
    <>
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
          <MainNavigation />
          {children}
        </HStack>
      </Center>
    </>
  );
};
