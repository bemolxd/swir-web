import { Divider, useColorModeValue, VStack } from "@chakra-ui/react";
import { EventApi } from "@fullcalendar/react";

import { AwaitingAction } from "components/AppState";
import { withSuspense } from "components/RemoteData";

import { OrderCode } from "./SectionComponents/OrderCode";
import { OrderTech } from "./SectionComponents/OrderTech";
import { OccupiedDates } from "./SectionComponents/OccupiedDates";

interface IProps {
  event: EventApi | null;
}

export const MoreDetails = withSuspense(({ event }: IProps) => {
  const borderColor = useColorModeValue("gray.300", "gray.500");

  if (!event) return <AwaitingAction />;

  const { endStr, startStr, display, id } = event;

  return (
    <VStack
      maxW="600px"
      w="100%"
      border="1px"
      borderColor={borderColor}
      borderRadius={4}
      p={4}
    >
      <OrderCode code={display.slice(11)} />
      <Divider />
      <OrderTech techId={id} />
      <Divider />
      <OccupiedDates dateFrom={startStr} dateTo={endStr} />
    </VStack>
  );
});
