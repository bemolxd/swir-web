import { EventSourceInput } from "@fullcalendar/react";

import { ItemAvailability } from "./types";

export const getAvailabilityCalendarEvents = (
  availability: ItemAvailability | undefined
): EventSourceInput => {
  if (!availability || availability.occupiedDates.length === 0) return [];

  return availability.occupiedDates.map((occupiedDate) => ({
    title: "Kod: " + occupiedDate.orderDoc.slice(11),
    start: occupiedDate.dateFrom,
    end: occupiedDate.dateTo,
    allDay: true,
    id: occupiedDate.techId,
    display: occupiedDate.orderDoc,
  }));
};
