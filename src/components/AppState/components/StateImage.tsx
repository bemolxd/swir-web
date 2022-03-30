import { Box, Center } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const StateImage = ({ children }: IProps) => {
  return (
    <Box>
      <Center>{children}</Center>
    </Box>
  );
};
