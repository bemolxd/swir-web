import { DatePicker } from "components/DatePicker";
import { FormControl } from "components/Form";
import { useEffect } from "react";

interface IProps {}

export const DateFromSelect = ({}: IProps) => {
  return (
    <FormControl name="dateFrom" maxW="240px" w="100%" isRequired>
      {(methods, fieldProps, { isInvalid }) => {
        return (
          <DatePickerComponent
            methods={methods}
            fieldProps={fieldProps}
            isInvalid={isInvalid}
          />
        );
      }}
    </FormControl>
  );
};

const DatePickerComponent = ({
  isInvalid,
  fieldProps,
  methods,
}: {
  isInvalid: boolean;
  fieldProps: any;
  methods: any;
}) => {
  useEffect(() => {}, []);

  return (
    <DatePicker
      {...fieldProps}
      placeholderText="Data początkowa"
      isInvalid={isInvalid}
      onChange={(value) => {
        methods.setValue("dateFrom", value, { shouldDirty: true });
        if (value === null) {
          methods.setError("dateFrom", { message: "Ustaw datę początkową" });
          return;
        }

        if (value) methods.clearErrors("dateFrom");
      }}
    />
  );
};
