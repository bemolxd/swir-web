import { Divider, Heading } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export const SummaryHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Heading size="lg" fontWeight="600">
        {formatMessage({
          id: "UserOrders.orderSummary.header",
          defaultMessage: "Podsumowanie",
        })}
      </Heading>
      <Divider />
    </>
  );
};
