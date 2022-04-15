import { defineMessages, useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

export const useChangeRoleNotification = () => {
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
    id: "Notification.ChangeRole.title",
    defaultMessage: "Zmień rolę",
  },
  success: {
    id: "Notification.ChangeRole.success",
    defaultMessage: "Zmieniono rolę",
  },
  error: {
    id: "Notification.ChangeRole.error",
    defaultMessage: "Wystąpił błąd podczas zmiany roli",
  },
});
