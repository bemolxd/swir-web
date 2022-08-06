import { Center, Text } from "@chakra-ui/react";
import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const StateSubtitle = ({ children }: IProps) => {
  return (
    <Center w="100%" textAlign="center">
      <Text>{children}</Text>
    </Center>
  );
};
