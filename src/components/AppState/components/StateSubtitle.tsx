import { Text } from "@chakra-ui/react";
import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const StateSubtitle = ({ children }: IProps) => {
  return <Text>{children}</Text>;
};
