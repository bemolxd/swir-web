import { Textarea } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

export const ItemParametersField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="parameters"
      label={formatMessage({ id: "parameters", defaultMessage: "Parametry" })}
    >
      {({ setValue, register, setError, clearErrors }, fieldProps) => (
        <Textarea
          {...fieldProps}
          {...register("parameters")}
          onChange={(e) => {
            if (e.target.value === "") {
              setError("parameters", {
                message: "Parametry przedmiotu nie mogą być puste",
              });
              return;
            }

            setValue("parameters", e.target.value);
            clearErrors("parameters");
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              setError("parameters", {
                message: "Parametry przedmiotu nie mogą być pusta",
              });
            }
          }}
          placeholder={formatMessage({
            id: "parameters.placeholder",
            defaultMessage: "Wprowadź parametry przedmiotu",
          })}
        />
      )}
    </FormControl>
  );
};
