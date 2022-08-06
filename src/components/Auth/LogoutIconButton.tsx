import { useIntl } from "react-intl";
import { MdLogout } from "react-icons/md";

import { IconButton } from "components/IconButton";

import { logout, logoutMessages } from "./logout";

export const LogoutIconButton = () => {
  const { formatMessage } = useIntl();

  return (
    <IconButton
      icon={<MdLogout />}
      isRound
      variant="outline"
      onClick={logout}
      tooltip={formatMessage(logoutMessages.logout)}
    />
  );
};
