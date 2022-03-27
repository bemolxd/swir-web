import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import { useIntl } from "react-intl";

import { colorModeMessages } from "./messages";

export const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { formatMessage } = useIntl();

  return (
    <Tooltip
      label={
        colorMode === "light"
          ? formatMessage(colorModeMessages.darkMode)
          : formatMessage(colorModeMessages.lightMode)
      }
    >
      <IconButton
        aria-label="color-mode-switch"
        variant="outline"
        isRound
        color={colorMode === "light" ? "blue.900" : "orange"}
        icon={colorMode === "light" ? <MdNightlight /> : <MdLightMode />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};
