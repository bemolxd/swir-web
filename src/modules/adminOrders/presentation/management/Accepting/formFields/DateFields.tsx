import { Box, HStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { dayjs } from "utils";

import { FormControl } from "components/Form";
import { DatePicker } from "components/DatePicker";

export const DateFields = () => {
  return (
    <HStack align="flex-end" justify="center" spacing={6} w="100%">
      <DateFromSelect />
      <DateToSelect />
    </HStack>
  );
};

const DateFromSelect = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="dateFrom"
      label={formatMessage({
        id: "AdminOrderManagement.acceptModal.dateFrom",
        defaultMessage: "Data początkowa:",
      })}
    >
      {(
        { getValues, setValue, register, setError, clearErrors },
        fieldProps,
        { isInvalid }
      ) => {
        const dateValue = getValues("dateFrom");

        return (
          <DatePicker
            {...fieldProps}
            {...(register("dateFrom"), { required: true })}
            name="dateFrom"
            onChange={(value) => {
              setValue("dateFrom", value, { shouldDirty: true });
              setValue("dateTo", null, { shouldDirty: true });
              if (value === null) {
                setError("dateFrom", {
                  message: "Ustaw datę początkową",
                });
                return;
              }
              if (value) clearErrors("dateFrom");
            }}
            isInvalid={isInvalid}
            placeholderText={formatMessage({
              id: "UserOrderSummary.DateFrom.placeholder",
              defaultMessage: "Data początkowa",
            })}
            value={dateValue ? dayjs(dateValue).toString() : undefined}
            isClearable={false}
          />
        );
      }}
    </FormControl>
  );
};

const DateToSelect = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="dateTo"
      label={formatMessage({
        id: "AdminOrderManagement.acceptModal.dateTo",
        defaultMessage: "Data końcowa:",
      })}
    >
      {(
        { getValues, setValue, setError, clearErrors, register },
        fieldProps,
        { isInvalid }
      ) => {
        const dateFrom = getValues("dateFrom");
        const dateValue = getValues("dateTo");

        return (
          <DatePicker
            {...fieldProps}
            {...register("dateTo", { required: true })}
            name="dateTo"
            minDate={dayjs(dateFrom).add(1, "day").toDate()}
            onChange={(value) => {
              setValue("dateTo", value, { shouldDirty: true });
              if (value === null) {
                setError("dateTo", {
                  message: "Ustaw datę końcową",
                });
                return;
              }

              if (value) clearErrors("dateTo");
            }}
            isInvalid={isInvalid}
            placeholderText={formatMessage({
              id: "UserOrderSummary.DateTo.placeholder",
              defaultMessage: "Data końcowa",
            })}
            value={dateValue ? dayjs(dateValue).toString() : undefined}
            isClearable={false}
          />
        );
      }}
    </FormControl>
  );
};
