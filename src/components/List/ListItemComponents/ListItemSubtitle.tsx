import { Text } from "@chakra-ui/react";
import { useCheckMobile } from "components/Layout";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const ListItemSubtitle = ({ children }: IProps) => {
  const isMobile = useCheckMobile();

  return (
    <Text
      textColor="gray.400"
      textTransform="uppercase"
      maxW={isMobile ? "156px" : "240px"}
      w="100%"
      h="5"
      isTruncated
    >
      {children}
    </Text>
  );
};
