import { useState } from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { EventApi, EventClickArg } from "@fullcalendar/react";

import { withSuspense } from "components/RemoteData";
import { Calendar } from "components/Calendar";
import { useCheckMobile } from "components/Layout";

import { useItemAvailabilityQuery } from "modules/items/infrastructure";
import { getAvailabilityCalendarEvents } from "modules/items/application";

import { MoreDetails } from "./MoreDetails";

interface IProps {
  itemId: string;
}

export const AvailabilitySection = withSuspense(({ itemId }: IProps) => {
  const { formatMessage } = useIntl();
  const availability = useItemAvailabilityQuery(itemId);
  const [event, setEvent] = useState<EventApi | null>(null);
  const isMobile = useCheckMobile();

  const occupiedDates = getAvailabilityCalendarEvents(availability);

  const handleEventClick = ({ event: eventData }: EventClickArg) => {
    setEvent(eventData);
  };

  return (
    <VStack w="100%" justify="flex-start" align="flex-start" id="availability">
      <Heading size="md" fontWeight="400">
        {formatMessage({
          id: "ItemDetails.content.availabilityHeader",
          defaultMessage: "Dostępność:",
        })}
      </Heading>
      {!isMobile ? (
        <HStack w="100%" align="center" justify="space-evenly" spacing={4}>
          <Calendar events={occupiedDates} onEventClick={handleEventClick} />
          <MoreDetails event={event} />
        </HStack>
      ) : (
        <VStack w="100%" align="flex-start" spacing={4}>
          <Calendar events={occupiedDates} onEventClick={handleEventClick} />
          <MoreDetails event={event} />
        </VStack>
      )}
    </VStack>
  );
});
