import { useIntl } from "react-intl";
import { Divider, Text } from "@chakra-ui/react";

import { dayjs } from "utils";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { OrderStatus } from "modules/userOrders/application";

interface IProps {
  status: OrderStatus;
  dateFrom: string;
  dateTo: string;
}

export const ReservationDatesSection = ({
  status,
  dateFrom,
  dateTo,
}: IProps) => {
  const { formatMessage } = useIntl();

  if (status === OrderStatus.COMPLETING) return null;

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderDetails.reservationDates.header",
            defaultMessage: "Okres wypożyczenia",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <Text>{`od ${dayjs(dateFrom).format("DD-MM-YYYY")} do ${dayjs(
            dateTo
          ).format("DD-MM-YYYY")}`}</Text>
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
