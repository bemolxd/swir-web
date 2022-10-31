import { Avatar, HStack, Text } from "@chakra-ui/react";

import { LogoutIconButton, useMeQuery } from "components/Auth";
import { ColorModeButton } from "components/ColorMode";
import { useCheckMobile } from "components/Layout";
import { MobileNavigation } from "components/MainNavigation";

import { CompletingOrderButton } from "modules/userOrders/presentation";

export const UserSection = () => {
  const me = useMeQuery();

  const isMobile = useCheckMobile();

  if (isMobile) {
    return (
      <HStack h="60px">
        <Text>{me?.firstName}</Text>
        <Avatar size="sm" />
        <CompletingOrderButton />
        <MobileNavigation />
      </HStack>
    );
  }

  return (
    <HStack h="60px">
      <Text>{me?.firstName}</Text>
      <Avatar size="sm" />
      <CompletingOrderButton />
      <ColorModeButton />
      <LogoutIconButton />
    </HStack>
  );
};
