import { useEffect, useState } from "react";
import { MdLink } from "react-icons/md";
import { useIntl } from "react-intl";

import { useNotification } from "components/Notifications";
import { IconButton } from "components/IconButton";

interface IProps {
  orderId: string;
}

export const CopyLinkButton = ({ orderId }: IProps) => {
  const { formatMessage } = useIntl();
  const [copied, setCopied] = useState<boolean>();
  const timeout = () => setTimeout(() => setCopied(false), 3000);

  const showCopiedNotification = useNotification(
    formatMessage({
      id: "UserOrders.orderComponent.copyLinkNotification.title",
      defaultMessage: "Skopiuj link",
    }),
    formatMessage({
      id: "UserOrders.orderComponent.copyLinkNotification.description",
      defaultMessage: "Skopiowano link do schowka",
    }),
    "info"
  );

  const handleClick = () => {
    navigator.clipboard.writeText(
      `${process.env.REACT_APP_CLIENT_URL}/zgloszenia/${orderId}`
    );
    setCopied(true);
    showCopiedNotification();
  };

  useEffect(() => {
    const timeoutId = timeout();
    return () => clearTimeout(timeoutId);
  }, [copied]);

  return (
    <IconButton
      tooltip={formatMessage({
        id: "UserOrders.orderComponent.copyLinkBtn",
        defaultMessage: "Skopiuj link do zgłoszenia",
      })}
      icon={<MdLink />}
      isDisabled={copied}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    />
  );
};
