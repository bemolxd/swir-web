import { SecondaryText } from "components/Typography";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const GridItemSubtitle = ({ children }: IProps) => {
  return (
    <SecondaryText
      textColor="gray.400"
      textTransform="uppercase"
      w="100%"
      maxW="180px"
      h="8"
      isTruncated
    >
      {children}
    </SecondaryText>
  );
};
