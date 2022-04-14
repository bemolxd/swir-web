import { Heading } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const InfoDetailsLabel = ({ children }: IProps) => {
  return (
    <Heading fontWeight="400" maxW="250px" w="100%" size="md">
      {children}
    </Heading>
  );
};
