import { useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

import { editItemMessages } from "./messages";

export const useEditItemNotifications = () => {
  const { formatMessage } = useIntl();

  const showSuccessNotification = useNotification(
    formatMessage(editItemMessages.title),
    formatMessage(editItemMessages.success),
    "success"
  );

  const showErrorNotification = useNotification(
    formatMessage(editItemMessages.title),
    formatMessage(editItemMessages.error),
    "error"
  );

  return { showSuccessNotification, showErrorNotification };
};
