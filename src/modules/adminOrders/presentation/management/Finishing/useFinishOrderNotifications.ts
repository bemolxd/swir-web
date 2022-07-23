import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useFinishOrderNotifications = () => {
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
    id: "AdminOrderManagement.finishing.notification.title",
    defaultMessage: "Zakończ zgłoszenie",
  },
  success: {
    id: "AdminOrderManagement.finishing.notification.success",
    defaultMessage: "Pomyślnie zakończono zgłoszenie",
  },
  error: {
    id: "AdminOrderManagement.finishing.notification.error",
    defaultMessage: "Podczas zakańczania wystąpił błąd",
  },
});
