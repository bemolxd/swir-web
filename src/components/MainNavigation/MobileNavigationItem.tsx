import { Box } from "@chakra-ui/react";
import { useLocation, useHistory } from "react-router-dom";

import { IChildrenProp } from "types";

import { useMobileMenuHandler } from "./useMobileMenuHandler";

interface IProps extends IChildrenProp {
  path: string;
}

export const MobileNavigationItem = ({ children, path }: IProps) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const onClose = useMobileMenuHandler((handler) => handler.onClose);

  const handleClick = () => {
    onClose();
    push(path);
  };

  return (
    <Box
      onClick={handleClick}
      w="100%"
      p={2}
      textAlign="center"
      borderRadius={2}
      boxShadow={pathname.includes(path) ? "outline" : "lg"}
    >
      {children}
    </Box>
  );
};
