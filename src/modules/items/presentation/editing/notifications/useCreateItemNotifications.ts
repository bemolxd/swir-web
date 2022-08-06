import { useIntl } from "react-intl";

import { useNotification } from "components/Notifications";

import { createItemMessages } from "./messages";

export const useCreateItemNotifications = () => {
  const { formatMessage } = useIntl();

  const showSuccessNotification = useNotification(
    formatMessage(createItemMessages.title),
    formatMessage(createItemMessages.success),
    "success"
  );

  const showErrorNotification = useNotification(
    formatMessage(createItemMessages.title),
    formatMessage(createItemMessages.error),
    "error"
  );

  const showMissingDataNotification = useNotification(
    formatMessage(createItemMessages.title),
    formatMessage(createItemMessages.missingData),
    "error"
  );

  return {
    showSuccessNotification,
    showErrorNotification,
    showMissingDataNotification,
  };
};
