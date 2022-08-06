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
      {({ setValue, register, setError, clearErrors }, fieldProps) => (
        <Input
          {...fieldProps}
          {...register("name")}
          placeholder={formatMessage({
            id: "name.placeholder",
            defaultMessage: "Wprowadź nazwę przedmiotu",
          })}
          onChange={(e) => {
            if (e.target.value === "") {
              setError("name", {
                message: "Nazwa przedmiotu nie może być pusta",
              });
              return;
            }

            setValue("name", e.target.value);
            clearErrors("name");
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              setError("name", {
                message: "Nazwa przedmiotu nie może być pusta",
              });
            }
          }}
        />
      )}
    </FormControl>
  );
};
