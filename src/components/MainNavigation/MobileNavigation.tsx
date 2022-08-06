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
  Text,
  VStack,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdSegment } from "react-icons/md";
import { useIntl } from "react-intl";

import { ColorModeSwitch } from "components/ColorMode";
import { IconButton } from "components/IconButton";
import { MobileLogoutButton } from "components/Auth";

import { useMobileMenuHandler } from "./useMobileMenuHandler";
import { MobileNavigationMenuContent } from "./MobileNavigationMenuContent";

export const MobileNavigation = () => {
  const [isOpen, onClose] = useMobileMenuHandler((handler) => [
    handler.isOpen,
    handler.onClose,
  ]);
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const borderColor = useColorModeValue("200", "600");

  return (
    <>
      <MenuIconButton />
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full">
        <DrawerOverlay zIndex={10} />
        <DrawerContent zIndex={10}>
          <DrawerCloseButton
            mt={2}
            borderRadius="full"
            border={`1px solid ${theme.colors.gray[borderColor]}`}
          />
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
              <MobileLogoutButton />
              <Divider />
              <Text>
                {formatMessage({
                  id: "MobileNavigation.appTitle",
                  defaultMessage: "System Wypożyczeń i Rezerwacji",
                })}
              </Text>
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
      variant="outline"
      isRound
      icon={<MdSegment />}
      onClick={onOpen}
    />
  );
};
