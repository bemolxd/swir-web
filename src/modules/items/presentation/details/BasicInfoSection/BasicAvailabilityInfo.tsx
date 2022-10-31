import { useIntl } from "react-intl";
import { Text } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";

import { useItemAvailabilityQuery } from "modules/items/infrastructure";

interface IProps {
  itemId: string;
}

export const BasicAvailabilityInfo = withSuspense(
  ({ itemId }: IProps) => {
    const { formatMessage } = useIntl();
    const availability = useItemAvailabilityQuery(itemId);

    const itemsLeftText = formatMessage(
      {
        id: "ItemDetails.content.BasicInfoSection.itemsLeft",
        defaultMessage: "Dostępnych na ten moment: {value}",
      },
      { value: availability && availability.availableNowCount }
    );

    return (
      <>
        {availability && availability.availableNowCount! > 0 && (
          <Text fontSize="sm">{itemsLeftText}</Text>
        )}
      </>
    );
  },
  { fallback: <></> }
);
