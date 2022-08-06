import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useLocalStorage } from "utils";

export const useCookiesNotification = () => {
  const [value, setValue] = useLocalStorage("cookie-consent", false);
  const { formatMessage } = useIntl();

  const notifId = "cookie-consent";
  const privacyUrl = process.env.REACT_APP_CLIENT_URL + "/privacy";
  const toast = useToast();

  const onConsent = () => {
    setValue(true);
    toast.close(notifId);
  };

  useEffect(() => {
    if (!value && !toast.isActive(notifId)) {
      toast({
        id: notifId,
        title: formatMessage({
          id: "CookieConsent.title",
          defaultMessage: "Pliki cookies",
        }),
        description: formatMessage(
          {
            id: "CookieConsent.description",
            defaultMessage:
              "Strona korzysta z plików cookies. Więcej informacji na stronie z {privacy}.",
          },
          {
            privacy: (
              <a
                href={privacyUrl}
                style={{ textDecoration: "underline" }}
                onClick={onConsent}
              >
                polityką prywatności
              </a>
            ),
          }
        ),
        status: "warning",
        variant: "subtle",
        duration: null,
        position: "bottom-left",
        onCloseComplete: onConsent,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};
