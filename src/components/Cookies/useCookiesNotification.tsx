import { useEffect } from "react";
import { Link, useColorModeValue, useToast } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router";

import { useLocalStorage } from "utils";

export const useCookiesNotification = () => {
  const [value, setValue] = useLocalStorage("cookie-consent", false);
  const { formatMessage } = useIntl();
  const variant = useColorModeValue("subtle", "solid");

  const notifId = "cookie-consent";
  const toast = useToast();
  const navigate = useNavigate();

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
              <Link
                style={{ textDecoration: "underline" }}
                onClick={() => {
                  navigate("/privacy");
                  onConsent();
                }}
              >
                polityką prywatności
              </Link>
            ),
          }
        ),
        status: "warning",
        variant,
        duration: null,
        position: "bottom-left",
        onCloseComplete: onConsent,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};
