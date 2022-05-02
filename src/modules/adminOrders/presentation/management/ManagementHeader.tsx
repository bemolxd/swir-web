import { Divider, Heading } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export const ManagementHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Heading size="lg" fontWeight="500">
        {formatMessage({
          id: "AdminOrderDetails.management.header",
          defaultMessage: "Zarządzaj zgłoszeniem",
        })}
      </Heading>
      <Divider />
    </>
  );
};
