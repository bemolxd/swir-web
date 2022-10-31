import { Badge, VStack, Text } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useCheckMobile } from "components/Layout";

interface IProps {
  dateFrom: string;
  dateTo: string;
}

export const OccupiedDates = ({ dateFrom, dateTo }: IProps) => {
  const { formatMessage } = useIntl();
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%" px={4} align="flex-start">
      <Badge>
        {formatMessage({
          id: "ItemAvailability.OccupiedDates.label",
          defaultMessage: "Okres zajętości sprzętu",
        })}
      </Badge>
      {!isMobile ? (
        <Text>
          {formatMessage(
            {
              id: "ItemAvailability.OccupiedDates.desktop.dates",
              defaultMessage: "Zajęte od {dateFrom} do {dateTo}",
            },
            { dateFrom, dateTo }
          )}
        </Text>
      ) : (
        <VStack w="100%" align="flex-start">
          <Text>
            {formatMessage(
              {
                id: "ItemAvailability.OccupiedDates.mobile.dateFrom",
                defaultMessage: "Od: {dateFrom}",
              },
              { dateFrom }
            )}
          </Text>
          <Text>
            {formatMessage(
              {
                id: "ItemAvailability.OccupiedDates.mobile.dateTo",
                defaultMessage: "Do: {dateTo}",
              },
              { dateTo }
            )}
          </Text>
        </VStack>
      )}
    </VStack>
  );
};
