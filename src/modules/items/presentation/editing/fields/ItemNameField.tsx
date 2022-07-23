import { Input } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

export const ItemNameField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      w="100%"
      name="name"
      label={formatMessage({
        id: "name",
        defaultMessage: "Nazwa przedmiotu",
      })}
    >
      {({ setValue, register }, fieldProps) => (
        <Input
          {...fieldProps}
          {...register("name")}
          onChange={(e) => setValue("name", e.target.value)}
        />
      )}
    </FormControl>
  );
};
