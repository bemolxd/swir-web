import { Alert, AlertIcon } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

export const ArchivedOrderAlert = () => {
  const { formatMessage } = useIntl();

  return (
    <Alert variant="subtle" status="warning" borderRadius={4} boxShadow="md">
      <AlertIcon />
      <span>
        {formatMessage(
          {
            id: "ArchivedOrders.infoAlert",
            defaultMessage:
              "To zgłoszenie zostało zarchiwizowane. Zobacz aktualne zgłoszenia {link}.",
          },
          {
            link: (
              <Link to="/zgloszenia" style={{ textDecoration: "underline" }}>
                tutaj
              </Link>
            ),
          }
        )}
      </span>
    </Alert>
  );
};
