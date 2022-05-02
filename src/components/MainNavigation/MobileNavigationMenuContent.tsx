import { VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useGetContextType } from "components/Auth";

import { navigationMessages } from "./messages";
import { MobileNavigationItem } from "./MobileNavigationItem";
import { ContextType } from "types";

export const MobileNavigationMenuContent = () => {
  const { formatMessage } = useIntl();
  const contextType = useGetContextType();

  if (contextType === ContextType.USER) {
    return (
      <VStack mb={4}>
        <MobileNavigationItem path="/sprzet">
          {formatMessage(navigationMessages.items)}
        </MobileNavigationItem>
        <MobileNavigationItem path="/zgloszenia">
          {formatMessage(navigationMessages.userOrders)}
        </MobileNavigationItem>
      </VStack>
    );
  }

  // ContextType.GLOBAL
  return (
    <VStack mb={4}>
      <MobileNavigationItem path="/sprzet">
        {formatMessage(navigationMessages.items)}
      </MobileNavigationItem>
      <MobileNavigationItem path="/zgloszenia">
        {formatMessage(navigationMessages.userOrders)}
      </MobileNavigationItem>
      <MobileNavigationItem path="/uzytkownicy">
        {formatMessage(navigationMessages.users)}
      </MobileNavigationItem>
    </VStack>
  );
};
