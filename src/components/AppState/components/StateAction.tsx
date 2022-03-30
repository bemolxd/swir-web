import { Button, ButtonProps } from "@chakra-ui/react";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  action(...args: any[]): void;
  variant?: ButtonProps["variant"];
}

export const StateAction = ({
  action,
  variant = "outline",
  children,
}: IProps) => {
  return (
    <Button onClick={action} variant={variant} colorScheme="teal">
      {children}
    </Button>
  );
};
