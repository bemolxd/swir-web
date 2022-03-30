import { useColorMode } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import { useIntl } from "react-intl";

import { IconButton } from "components/IconButton";

import { colorModeMessages } from "./messages";

export const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { formatMessage } = useIntl();

  return (
    <IconButton
      tooltip={
        colorMode === "light"
          ? formatMessage(colorModeMessages.darkMode)
          : formatMessage(colorModeMessages.lightMode)
      }
      variant="outline"
      isRound
      color={colorMode === "light" ? "blue.900" : "orange"}
      icon={colorMode === "light" ? <MdNightlight /> : <MdLightMode />}
      onClick={toggleColorMode}
    />
  );
};
