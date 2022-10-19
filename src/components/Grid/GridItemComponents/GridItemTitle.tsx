import { Text } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const GridItemTitle = ({ children }: IProps) => {
  return (
    <Text fontWeight="400" w="100%" maxW="180px" h="5" isTruncated>
      {children}
    </Text>
  );
};
