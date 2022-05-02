import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useAcceptOrderNotifications = () => {
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
    id: "AdminOrderManagement.accepting.notification.title",
    defaultMessage: "Zatwierdź zgłoszenie",
  },
  success: {
    id: "AdminOrderManagement.accepting.notification.success",
    defaultMessage: "Pomyślnie zatwierdzono zgłoszenie",
  },
  error: {
    id: "AdminOrderManagement.accepting.notification.error",
    defaultMessage: "Podczas zatwierdzania wystąpił błąd",
  },
});
