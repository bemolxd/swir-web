import { Center, Heading } from "@chakra-ui/react";
import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const StateTitle = ({ children }: IProps) => {
  return (
    <Center w="100%" textAlign="center">
      <Heading fontWeight="400" size="xl">
        {children}
      </Heading>
    </Center>
  );
};
