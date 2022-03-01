import { VStack } from "@chakra-ui/react";
import { MobileNavigationItem } from "./MobileNavigationItem";

export const MobileNavigationMenuContent = () => {
  return (
    <VStack mb={4}>
      <MobileNavigationItem path="sprzet">Baza sprzętu</MobileNavigationItem>
      <MobileNavigationItem path="rezerwacje">Rezerwacje</MobileNavigationItem>
    </VStack>
  );
};
