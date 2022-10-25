import { useIntl } from "react-intl";

import { FormControl } from "components/Form";
import {
  createDefaultValue,
  deserializeHtml,
  serializeValue,
  SlateEditor,
} from "components/SlateEditor";

export const ItemParametersField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="parameters"
      label={formatMessage({ id: "parameters", defaultMessage: "Parametry" })}
    >
      {({
        setValue,
        getValues,
        register,
        setError,
        clearErrors,
        formState: { errors },
      }) => {
        return (
          <SlateEditor
            initialValue={
              deserializeHtml(getValues("parameters")) ?? createDefaultValue
            }
            onValueChange={(value) => {
              if (serializeValue(value) === "<p></p>") {
                setError("parameters", {
                  message: "Parametry przedmiotu nie mogą pozostać puste",
                });
                return;
              }

              clearErrors("parameters");
              setValue("parameters", serializeValue(value));
            }}
            onSlateBlur={(value) => {
              if (serializeValue(value) === "<p></p>") {
                setError("parameters", {
                  message: "Parametry przedmiotu nie mogą pozostać puste",
                });
                return;
              }

              clearErrors("parameters");
              setValue("parameters", serializeValue(value));
            }}
            placeholder={formatMessage({
              id: "parameters.placeholder",
              defaultMessage: "Wprowadź parametry przedmiotu",
            })}
            isInvalid={!!errors?.parameters}
            {...register("parameters")}
          />
        );
      }}
    </FormControl>
  );
};
