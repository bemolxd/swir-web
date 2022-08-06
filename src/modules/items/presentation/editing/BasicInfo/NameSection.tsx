import { HStack, VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { ItemNameField } from "../fields/ItemNameField";
import { ItemVendorField } from "../fields/ItemVendorField";

export const NameSection = () => {
  const isMobile = useCheckMobile();

  if (isMobile) {
    return (
      <VStack w="100%" align="center" justify="space-evenly" spacing={4}>
        <ItemNameField />
        <ItemVendorField />
      </VStack>
    );
  }

  return (
    <HStack w="100%" align="flex-start" justify="space-evenly" spacing={4}>
      <ItemNameField />
      <ItemVendorField />
    </HStack>
  );
};
