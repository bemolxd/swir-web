import { useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

import { deleteItemMessages } from "./messages";

export const useDeleteItemNotifications = () => {
  const { formatMessage } = useIntl();

  const showSuccessNotification = useNotification(
    formatMessage(deleteItemMessages.title),
    formatMessage(deleteItemMessages.success),
    "success"
  );

  const showErrorNotification = useNotification(
    formatMessage(deleteItemMessages.title),
    formatMessage(deleteItemMessages.error),
    "error"
  );

  return { showSuccessNotification, showErrorNotification };
};
