import { Heading } from "@chakra-ui/react";
import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const StateTitle = ({ children }: IProps) => {
  return (
    <Heading fontWeight="400" size="xl">
      {children}
    </Heading>
  );
};
