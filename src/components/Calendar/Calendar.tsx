import FullCalendar, {
  EventClickArg,
  EventSourceInput,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import eventInteraction from "@fullcalendar/interaction";
import styled from "@emotion/styled";

interface IProps {
  events: EventSourceInput;
  onEventClick?(data: EventClickArg): void;
}

export const Calendar = ({ events, onEventClick }: IProps) => {
  return (
    <StyledBox>
      <FullCalendar
        plugins={[dayGridPlugin, eventInteraction]}
        locale="pl"
        firstDay={1}
        events={events}
        eventClick={onEventClick}
        buttonText={{ today: "dzisiaj" }}
        dayMaxEvents={1}
      />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .fc {
    max-width: 600px;
    width: 100%;
    min-height: 500px;
  }
  .fc-toolbar-title {
    font-size: 20px;
  }
  .fc-col-header-cell-cushion {
    font-size: 12px;
  }
  .fc-event-title {
    margin-left: 4px;
  }
  .fc-event-title-container {
    cursor: pointer;
  }
  .fc-button {
    border-radius: 8px;
    height: 40px;
  }
  .fc-button-primary {
    border-color: #319795;
    background-color: #319795;
    transition: 0.2s;
  }
  .fc-button-primary:disabled {
    background-color: #234e52;
    transition: 0.2s;
    cursor: not-allowed;
  }
  .fc-button-primary:not(:disabled):hover {
    background-color: #2c7a7b;
    border-color: #2c7a7b;
  }
`;
