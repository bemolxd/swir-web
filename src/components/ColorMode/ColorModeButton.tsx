import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";

export const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "light" ? "Ciemny motyw" : "Jasny motyw"}>
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
