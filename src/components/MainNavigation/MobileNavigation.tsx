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
  Link,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { MdInfoOutline, MdOutlinePrivacyTip, MdSegment } from "react-icons/md";
import { useIntl } from "react-intl";

import { ColorModeSwitch } from "components/ColorMode";
import { IconButton } from "components/IconButton";
import { MobileLogoutButton } from "components/Auth";

import { useMobileMenuHandler } from "./useMobileMenuHandler";
import { MobileNavigationMenuContent } from "./MobileNavigationMenuContent";
import { AboutModal } from "./UsefulLinks";
import { useAboutModalHandler } from "./useAboutModalHandler";

export const MobileNavigation = () => {
  const [isOpen, onClose] = useMobileMenuHandler((handler) => [
    handler.isOpen,
    handler.onClose,
  ]);
  const [isAboutOpen, onAboutClose] = useAboutModalHandler((handler) => [
    handler.isOpen,
    handler.onClose,
  ]);
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const borderColor = useColorModeValue("200", "600");

  return (
    <>
      <AboutModal isOpen={isAboutOpen} onClose={onAboutClose} />
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
              <UsefulButtons />
              <MobileLogoutButton />
              <Divider />
              <Text>
                {formatMessage({
                  id: "MobileNavigation.appTitle",
                  defaultMessage: "System Wypożyczeń i Rezerwacji",
                })}
              </Text>
              <span>
                &copy; {new Date().getFullYear()}{" "}
                <Link href="https://multimed.org" target="_blank">
                  Multimed
                </Link>
              </span>
              <span>
                Bartosz Bem{" ("}
                <Link href="https://github.com/bemolxd" target="_blank">
                  bemolx
                </Link>
                {")"}
              </span>
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

const UsefulButtons = () => {
  const onClose = useMobileMenuHandler((handler) => handler.onClose);
  const navigate = useNavigate();
  const borderColor = useColorModeValue("200", "600");
  const theme = useTheme();
  const onOpen = useAboutModalHandler((handler) => handler.onOpen);

  return (
    <HStack spacing={4} mb={8}>
      <IconButton
        icon={<MdOutlinePrivacyTip />}
        onClick={() => {
          onClose();
          navigate("/privacy");
        }}
        border={`1px solid ${theme.colors.gray[borderColor]}`}
        borderRadius="full"
        variant="outline"
      />
      <IconButton
        icon={<MdInfoOutline />}
        onClick={() => {
          onClose();
          onOpen();
        }}
        border={`1px solid ${theme.colors.gray[borderColor]}`}
        borderRadius="full"
        variant="outline"
      />
    </HStack>
  );
};
