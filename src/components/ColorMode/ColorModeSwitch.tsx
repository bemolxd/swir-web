import { HStack, Text, useColorMode, Switch } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { colorModeMessages } from "./messages";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { formatMessage } = useIntl();

  return (
    <HStack my={4} justify="space-between" align="center">
      <Text fontWeight="400">{formatMessage(colorModeMessages.darkMode)}</Text>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};
