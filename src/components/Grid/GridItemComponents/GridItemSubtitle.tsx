import { Text } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const GridItemSubtitle = ({ children }: IProps) => {
  return (
    <Text textColor="gray.400" textTransform="uppercase">
      {children}
    </Text>
  );
};