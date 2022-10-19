import { Text } from "@chakra-ui/react";
import { useCheckMobile } from "components/Layout";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const ListItemTitle = ({ children }: IProps) => {
  const isMobile = useCheckMobile();

  return (
    <Text
      fontWeight="400"
      maxW={isMobile ? "156px" : "240px"}
      w="100%"
      h="5"
      isTruncated
    >
      {children}
    </Text>
  );
};
