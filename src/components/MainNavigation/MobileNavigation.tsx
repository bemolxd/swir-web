import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdSegment } from "react-icons/md";

import { ColorModeSwitch } from "components/ColorMode";

import { useMobileMenuHandler } from "./useMobileMenuHandler";
import { MobileNavigationMenuContent } from "./MobileNavigationMenuContent";

export const MobileNavigation = () => {
  const [isOpen, onClose] = useMobileMenuHandler((handler) => [
    handler.isOpen,
    handler.onClose,
  ]);

  return (
    <>
      <MenuIconButton />
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={2} />
          <DrawerHeader w="100%">
            <Heading size="lg" fontWeight="400">
              SWiR
            </Heading>
            <ColorModeSwitch />
            <Divider />
          </DrawerHeader>
          <DrawerBody>
            <MobileNavigationMenuContent />
          </DrawerBody>
          <DrawerFooter justifyContent="center">
            <VStack w="100%">
              <Divider />
              <Text>System Wypożyczeń i Rezerwacji</Text>
              <Text>&copy; {new Date().getFullYear()} Multimed</Text>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const MenuIconButton = () => {
  const onOpen = useMobileMenuHandler((handler) => handler.onOpen);

  return (
    <IconButton
      aria-label="mobile-menu-button"
      variant="outline"
      isRound
      icon={<MdSegment />}
      onClick={onOpen}
    />
  );
};
