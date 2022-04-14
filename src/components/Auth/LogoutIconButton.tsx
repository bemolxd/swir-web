import { useIntl } from "react-intl";
import { MdLogout } from "react-icons/md";

import { IconButton } from "components/IconButton";

import { logout } from "./logout";

export const LogoutIconButton = () => {
  const { formatMessage } = useIntl();

  return (
    <IconButton
      icon={<MdLogout />}
      isRound
      variant="outline"
      onClick={logout}
      tooltip={formatMessage({
        id: "Auth.logoutIconBtn",
        defaultMessage: "Wyloguj",
      })}
    />
  );
};
