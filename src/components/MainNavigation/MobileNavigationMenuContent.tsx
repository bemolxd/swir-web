import { VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { navigationMessages } from "./messages";
import { MobileNavigationItem } from "./MobileNavigationItem";

export const MobileNavigationMenuContent = () => {
  const { formatMessage } = useIntl();

  return (
    <VStack mb={4}>
      <MobileNavigationItem path="sprzet">
        {formatMessage(navigationMessages.items)}
      </MobileNavigationItem>
      <MobileNavigationItem path="rezerwacje">
        {formatMessage(navigationMessages.reservations)}
      </MobileNavigationItem>
    </VStack>
  );
};
