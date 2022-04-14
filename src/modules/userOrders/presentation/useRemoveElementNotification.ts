import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useRemoveElementNotification = () => {
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
    id: "Notification.RemoveElement.title",
    defaultMessage: "Usuń element",
  },
  success: {
    id: "Notification.RemoveElement.success",
    defaultMessage: "Usunięto element z listy",
  },
  error: {
    id: "Notification.RemoveElement.error",
    defaultMessage: "Wystąpił błąd podczas usuwania elementu",
  },
});
