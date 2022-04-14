import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useAddElementNotifications = () => {
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
  const showAlreadyExistsNotification = useNotification(
    formatMessage(messages.title),
    formatMessage(messages.alreadyExists),
    "warning"
  );

  return {
    showSuccessNotification,
    showErrorNotification,
    showAlreadyExistsNotification,
  };
};

const messages = defineMessages({
  title: {
    id: "Notification.AddElement.title",
    defaultMessage: "Dodaj element",
  },
  success: {
    id: "Notification.AddElement.success",
    defaultMessage: "Dodano element do zgłoszenia",
  },
  error: {
    id: "Notification.AddElement.error",
    defaultMessage: "Wystąpił błąd podczas dodawania elementu",
  },
  alreadyExists: {
    id: "Notification.AddElement.alreadyExists",
    defaultMessage: "Element został już dodany do zgłoszenia",
  },
});
