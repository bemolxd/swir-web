import { Text, VStack } from "@chakra-ui/react";
import { EventApi } from "@fullcalendar/react";

import { AwaitingAction } from "components/AppState";

interface IProps {
  event: EventApi | null;
}

export const MoreDetails = ({ event }: IProps) => {
  if (!event) return <AwaitingAction />;

  const { endStr, startStr, title } = event;

  return (
    <VStack w="100%">
      <Text>{title}</Text>
      <Text>{startStr}</Text>
      <Text>{endStr}</Text>
    </VStack>
  );
};
