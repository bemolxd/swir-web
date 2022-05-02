import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useRejectOrderNotifications = () => {
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
    id: "AdminOrderManagement.rejecting.notification.title",
    defaultMessage: "Odrzuć zgłoszenie",
  },
  success: {
    id: "AdminOrderManagement.rejecting.notification.success",
    defaultMessage: "Pomyślnie odrzucono zgłoszenie",
  },
  error: {
    id: "AdminOrderManagement.rejecting.notification.error",
    defaultMessage: "Podczas odrzucania wystąpił błąd",
  },
});
