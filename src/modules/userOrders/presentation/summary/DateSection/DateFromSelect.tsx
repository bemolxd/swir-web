import { useIntl } from "react-intl";
import { dayjs } from "utils";

import { DatePicker } from "components/DatePicker";
import { FormControl } from "components/Form";
import { isNil } from "lodash";

export const DateFromSelect = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl name="dateFrom">
      {(methods, fieldProps, { isInvalid }) => {
        const dateValue = methods.getValues("dateFrom");

        return (
          <DatePicker
            {...fieldProps}
            {...methods.register("dateFrom", { required: true })}
            name="dateFrom"
            onChange={(value) => {
              methods.setValue("dateFrom", value, { shouldDirty: true });
              methods.setValue("dateTo", null, { shouldDirty: true });
              if (isNil(value)) {
                methods.setError("dateFrom", {
                  message: "Ustaw datę początkową",
                });
                return;
              }
              if (value) methods.clearErrors("dateFrom");
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                methods.setError("dateFrom", {
                  message: "Ustaw datę początkową",
                });
              }
            }}
            isInvalid={isInvalid}
            placeholderText={formatMessage({
              id: "UserOrderSummary.DateFrom.placeholder",
              defaultMessage: "Data początkowa",
            })}
            value={dateValue ? dayjs(dateValue).toString() : undefined}
          />
        );
      }}
    </FormControl>
  );
};
