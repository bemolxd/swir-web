import { useIntl } from "react-intl";

import { FormControl } from "components/Form";
import {
  createDefaultValue,
  deserializeHtml,
  serializeValue,
  SlateEditor,
} from "components/SlateEditor";

export const ItemDetailsField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="description"
      label={formatMessage({ id: "details", defaultMessage: "Opis" })}
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
              deserializeHtml(getValues("description")) ?? createDefaultValue
            }
            onValueChange={(value) => {
              if (serializeValue(value) === "<p></p>") {
                setError("description", {
                  message: "Opis przedmiotu nie może być pusty",
                });
                return;
              }

              clearErrors("description");
              setValue("description", serializeValue(value));
            }}
            onSlateBlur={(value) => {
              if (serializeValue(value) === "<p></p>") {
                setError("description", {
                  message: "Opis przedmiotu nie może być pusty",
                });
                return;
              }

              clearErrors("description");
              setValue("description", serializeValue(value));
            }}
            placeholder={formatMessage({
              id: "description.placeholder",
              defaultMessage: "Wprowadź opis przedmiotu",
            })}
            isInvalid={!!errors?.description}
            {...register("description")}
          />
        );
      }}
    </FormControl>
  );
};
