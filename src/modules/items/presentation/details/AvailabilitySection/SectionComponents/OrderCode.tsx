import { Heading } from "@chakra-ui/react";
import { useIntl } from "react-intl";

interface IProps {
  code: string;
}

export const OrderCode = ({ code }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <Heading size="lg" fontWeight="400">
      {formatMessage(
        {
          id: "ItemAvailability.availabilityCode",
          defaultMessage: "Kod zgłoszenia: {code}",
        },
        { code }
      )}
    </Heading>
  );
};
