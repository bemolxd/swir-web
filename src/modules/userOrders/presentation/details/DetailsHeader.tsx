import { Divider, Heading } from "@chakra-ui/react";
import { useIntl } from "react-intl";

interface IProps {
  orderId: string;
}

export const DetailsHeader = ({ orderId }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Heading size="lg" fontWeight="600">
        {formatMessage(
          {
            id: "UserOrders.orderDetails.header",
            defaultMessage: "Zgłoszenie nr {orderId}",
          },
          {
            orderId,
          }
        )}
      </Heading>
      <Divider />
    </>
  );
};
