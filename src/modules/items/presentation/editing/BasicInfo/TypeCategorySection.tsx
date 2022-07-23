import { HStack, VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";
import { ItemTypeSelect } from "../fields/ItemTypeSelect";
import { ItemCategorySelect } from "../fields/ItemCategorySelect";
import { ItemSubcategoryField } from "../fields/ItemSubcategoryField";

export const TypeCategorySection = () => {
  const isMobile = useCheckMobile();

  if (isMobile) {
    return (
      <VStack w="100%" align="center" justify="flex-start">
        <ItemTypeSelect />
        <ItemCategorySelect />
        <ItemSubcategoryField />
      </VStack>
    );
  }

  return (
    <VStack w="100%" align="flex-start" justify="flex-start">
      <HStack w="100%" align="center" justify="space-evenly" spacing={4}>
        <ItemTypeSelect />
        <ItemCategorySelect />
      </HStack>
      <ItemSubcategoryField />
    </VStack>
  );
};
