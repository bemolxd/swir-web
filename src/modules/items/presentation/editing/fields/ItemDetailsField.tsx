import { Textarea } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

export const ItemDetailsField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="description"
      label={formatMessage({ id: "details", defaultMessage: "Opis" })}
    >
      {({ setValue, register, setError, clearErrors }, fieldProps) => (
        <Textarea
          {...fieldProps}
          {...register("description")}
          onChange={(e) => {
            if (e.target.value === "") {
              setError("description", {
                message: "Opis przedmiotu nie może być pusty",
              });
              return;
            }

            setValue("description", e.target.value);
            clearErrors("description");
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              setError("description", {
                message: "Opis przedmiotu nie może być pusty",
              });
            }
          }}
          placeholder={formatMessage({
            id: "description.placeholder",
            defaultMessage: "Wprowadź opis przedmiotu",
          })}
        />
      )}
    </FormControl>
  );
};
