import {
  Input,
  useColorMode,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";

import { dayjs } from "utils";

import pl from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";

import { StyledDatePickerBox } from "./StyledDatePickerBox";

registerLocale("pl", pl);

export interface DatePickerProps extends ReactDatePickerProps {
  isInvalid?: boolean;
}

export const DatePicker = ({
  name,
  value,
  onChange,
  isClearable = true,
  isInvalid = false,
  ...props
}: DatePickerProps) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  const invalidColor = useColorModeValue(colors.red[500], colors.red[300]);
  const validColor = useColorModeValue(colors.gray[200], colors.gray[600]);
  const clearBtnBackground = useColorModeValue(
    colors.blue[500],
    colors.blue[300]
  );
  const clearBtnColor = useColorModeValue(colors.white, colors.gray[900]);
  const calendarBackground = useColorModeValue(colors.white, colors.gray[700]);
  const calendarColor = useColorModeValue(colors.gray[700], colors.white);
  const calendarSelectedBackground = useColorModeValue(
    colors.blue[500],
    colors.blue[300]
  );
  const calendarDayHover = useColorModeValue(
    colors.gray[200],
    colors.gray[600]
  );

  return (
    <StyledDatePickerBox
      isDarkMode={colorMode === "dark"}
      isInvalid={isInvalid}
      borderColor={isInvalid ? invalidColor : validColor}
      focusColor={colors.blue[500]}
      clearBtnColor={clearBtnColor}
      clearBtnBackground={clearBtnBackground}
      calendarBackground={calendarBackground}
      calendarColor={calendarColor}
      calendarSelectedBackground={calendarSelectedBackground}
      calendarDayHover={calendarDayHover}
    >
      <Input
        as={ReactDatePicker}
        name={name}
        locale="pl"
        autoComplete="off"
        value={value && dayjs(value).format("DD/MM/YYYY").toString()}
        isClearable={isClearable}
        minDate={new Date()}
        maxDate={new Date(2999, 1, 1)}
        {...props}
        // @ts-ignore
        onChange={(
          value: Date | [Date, Date] | null,
          event: React.SyntheticEvent<any> | undefined
        ) => {
          if (!value || Array.isArray(value)) {
            onChange(value as any, event);
            return;
          }

          const date = dayjs(value).hour(0).minute(0).second(0);

          onChange(date.format() as any, event);
        }}
        dateFormat="DD/MM/YYYY"
        showPopperArrow={false}
        selected={value ? dayjs(value).toDate() : undefined}
      />
    </StyledDatePickerBox>
  );
};
