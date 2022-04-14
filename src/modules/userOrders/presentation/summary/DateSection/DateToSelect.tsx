import { useIntl } from "react-intl";
import { dayjs } from "utils";

import { DatePicker } from "components/DatePicker";
import { FormControl } from "components/Form";

export const DateToSelect = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl name="dateTo">
      {(methods, fieldProps, { isInvalid }) => {
        const dateFrom = methods.getValues("dateFrom");
        const dateValue = methods.getValues("dateTo");

        return (
          <DatePicker
            {...fieldProps}
            {...methods.register("dateTo", { required: true })}
            name="dateTo"
            minDate={dayjs(dateFrom).add(1, "day").toDate()}
            onChange={(value) => {
              methods.setValue("dateTo", value, { shouldDirty: true });
              if (value === null) {
                methods.setError("dateTo", {
                  message: "Ustaw datę końcową",
                });
                return;
              }

              if (value) methods.clearErrors("dateTo");
            }}
            isInvalid={isInvalid}
            placeholderText={formatMessage({
              id: "UserOrderSummary.DateTo.placeholder",
              defaultMessage: "Data końcowa",
            })}
            value={dateValue ? dayjs(dateValue).toString() : undefined}
          />
        );
      }}
    </FormControl>
  );
};
