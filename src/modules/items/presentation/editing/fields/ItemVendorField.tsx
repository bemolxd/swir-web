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
      {({ setValue, register }, fieldProps) => (
        <Input
          {...fieldProps}
          {...register("vendor")}
          onChange={(e) => setValue("vendor", e.target.value)}
        />
      )}
    </FormControl>
  );
};
