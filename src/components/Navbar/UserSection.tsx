import {
  Avatar,
  HStack,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdLightMode, MdNightlight } from "react-icons/md";

import { useMeQuery } from "components/Auth";

export const UserSection = () => {
  const me = useMeQuery();

  return (
    <HStack h="60px">
      <Text>{me?.firstName}</Text>
      <Avatar size="sm" />
      <ColorModeSwitch />
    </HStack>
  );
};

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="color-mode-switch"
      variant="outline"
      isRound
      color={colorMode === "light" ? "blue.900" : "orange"}
      icon={colorMode === "light" ? <MdNightlight /> : <MdLightMode />}
      onClick={toggleColorMode}
    />
  );
};
