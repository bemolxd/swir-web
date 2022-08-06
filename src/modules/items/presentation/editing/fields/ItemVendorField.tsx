import { Input } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

export const ItemVendorField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      w="100%"
      name="vendor"
      label={formatMessage({
        id: "vendor",
        defaultMessage: "Nazwa producenta",
      })}
    >
      {({ setValue, register, setError, clearErrors }, fieldProps) => (
        <Input
          {...fieldProps}
          {...register("vendor")}
          placeholder={formatMessage({
            id: "vendor.placeholder",
            defaultMessage: "Wprowadź nazwę producenta",
          })}
          onChange={(e) => {
            if (e.target.value === "") {
              setError("vendor", {
                message: "Nazwa producenta nie może być pusta",
              });
              return;
            }

            setValue("vendor", e.target.value);
            clearErrors("vendor");
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              setError("vendor", {
                message: "Nazwa producenta nie może być pusta",
              });
            }
          }}
        />
      )}
    </FormControl>
  );
};
