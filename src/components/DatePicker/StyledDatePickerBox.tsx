import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const StyledDatePickerBox = styled(Box)<{
  isDarkMode: boolean;
  borderColor: string;
  focusColor: string;
  isInvalid: boolean;
  clearBtnColor: string;
  clearBtnBackground: string;
  calendarBackground: string;
  calendarColor: string;
  calendarSelectedBackground: string;
  calendarDayHover: string;
}>`
  .react-datepicker {
    background-color: ${({ calendarBackground }) => calendarBackground};
    font-family: inherit;
    border-color: ${({ calendarSelectedBackground }) =>
      calendarSelectedBackground};
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
  }
  .react-datepicker__input-container {
    height: 2.5rem;
  }
  .react-datepicker__input-container > input {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    border: ${({ isInvalid, borderColor }) =>
      isInvalid
        ? `2.5px solid ${borderColor} !important`
        : `1px solid ${borderColor} !important`};
  }
  .react-datepicker__input-container > input:focus {
    border: ${({ focusColor }) => `2px solid ${focusColor} !important`};
  }
  .react-datepicker__close-icon {
    right: 3px;
  }
  .react-datepicker__close-icon::after {
    width: 21px;
    height: 21px;
    background-color: ${({ clearBtnBackground }) => clearBtnBackground};
    color: ${({ clearBtnColor }) => clearBtnColor};
    font-size: 1.1rem;
  }
  .react-datepicker__input-time-container {
    background-color: transparent;
    filter: ${({ isDarkMode }) => (isDarkMode ? "invert(1)" : "invert(0)")};
  }
  .react-datepicker-time__input {
    background-color: transparent;
  }
  .react-datepicker__month-container,
  .react-datepicker__header {
    background: ${({ calendarBackground }) => calendarBackground};
    * {
      color: ${({ calendarColor }) => calendarColor};
    }
    .react-datepicker__day:hover {
      background: ${({ calendarDayHover }) => calendarDayHover};
    }
    .react-datepicker__day--selected {
      color: white;
      background: ${({ calendarSelectedBackground }) =>
        calendarSelectedBackground};
      font-weight: bold;
    }
    .react-datepicker__day--keyboard-selected {
      background-color: transparent;
    }
    .react-datepicker__day--disabled {
      opacity: 0.4;
    }
  }
`;
