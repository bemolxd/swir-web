import { Box, useColorModeValue } from "@chakra-ui/react";

import { IChildrenProp } from "types";

import { Navbar } from "components/Navbar";

interface IProps extends IChildrenProp {}

export const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <Box
        w="100%"
        minH="100vh"
        bg={useColorModeValue("white", "gray.700")}
        mx={40}
        mt="64px"
      >
        {children}
      </Box>
    </>
  );
};
