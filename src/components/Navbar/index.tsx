import { Heading, HStack, Spacer, useColorModeValue } from "@chakra-ui/react";

import { useMeQuery } from "components/Auth";

export const Navbar = () => {
  const me = useMeQuery();

  return (
    <HStack
      bg={useColorModeValue("white", "gray.700")}
      w="100%"
      h="60px"
      px={40}
      position="fixed"
      top="0"
      boxShadow="lg"
      zIndex="10"
      justify="space-evenly"
    >
      <Heading size="lg" fontWeight="400">
        SWiR
      </Heading>
      <Spacer />
    </HStack>
  );
};
