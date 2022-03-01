import { Text } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const ListItemTitle = ({ children }: IProps) => {
  return <Text fontWeight="400">{children}</Text>;
};
