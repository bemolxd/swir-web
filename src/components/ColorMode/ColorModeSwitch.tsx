import { HStack, Text, useColorMode, Switch } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack my={4} justify="space-between" align="center">
      <Text fontWeight="400">Ciemny motyw</Text>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};
