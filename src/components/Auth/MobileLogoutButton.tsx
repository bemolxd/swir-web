import { Button } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useIntl } from "react-intl";

import { logout, logoutMessages } from "./logout";

export const MobileLogoutButton = () => {
  const { formatMessage } = useIntl();

  return (
    <Button
      variant="ghost"
      rightIcon={<MdLogout />}
      borderRadius="full"
      onClick={logout}
    >
      {formatMessage(logoutMessages.logout)}
    </Button>
  );
};
