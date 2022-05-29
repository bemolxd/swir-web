import { IconButtonProps } from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";

import { IconButton } from "components/IconButton";

interface IProps extends Omit<IconButtonProps, "aria-label"> {
  isLoading?: boolean;
  children?: ReactElement;
  isDisabled?: boolean;
  onClick(): void;
}

export const PaginationButton = ({
  children,
  isLoading,
  isDisabled,
  onClick,
  ...props
}: IProps) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) setState(false);
  }, [isLoading]);

  return (
    <IconButton
      icon={children}
      onClick={() => {
        onClick();
        setState(true);
      }}
      isDisabled={isDisabled}
      isLoading={isLoading && state}
      {...props}
    />
  );
};
