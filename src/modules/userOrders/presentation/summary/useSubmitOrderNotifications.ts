import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useSubmitOrderNotifications = () => {
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
    id: "Notification.SubmitOrder.title",
    defaultMessage: "Prześlij zgłoszenie",
  },
  success: {
    id: "Notification.SubmitOrder.success",
    defaultMessage: "Pomyślnie przesłano zgłoszenie do Katedry",
  },
  error: {
    id: "Notification.SubmitOrder.error",
    defaultMessage: "Wystąpił błąd podczas wysyłania zgłoszenia",
  },
});
