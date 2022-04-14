import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useDeleteOrderNotifications = () => {
  const { formatMessage } = useIntl();

  const showSuccessNotification = useNotification(
    formatMessage(messages.title),
    formatMessage(messages.success),
    "success"
  );
  const showErrorNotification = useNotification(
    formatMessage(messages.title),
    formatMessage(messages.error),
    "error"
  );

  return { showSuccessNotification, showErrorNotification };
};

const messages = defineMessages({
  title: {
    id: "Notification.DeleteOrder.title",
    defaultMessage: "Usuń trwale zgłoszenie",
  },
  success: {
    id: "Notification.DeleteOrder.success",
    defaultMessage: "Usunięto trwale zgłoszenie",
  },
  error: {
    id: "Notification.DeleteOrder.error",
    defaultMessage: "Wystąpił błąd podczas usuwania zgłoszenia",
  },
});
