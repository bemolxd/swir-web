import { Box } from "@chakra-ui/react";

interface IProps {
  right?: string | number;
  top?: string | number;
}

export const NotificationBadge = ({ right = "8px", top = "8px" }: IProps) => {
  return (
    <Box
      bg="tomato"
      h="10px"
      w="10px"
      borderRadius="full"
      pos="absolute"
      right={right}
      top={top}
      zIndex={999}
    />
  );
};
