import { useIntl } from "react-intl";
import { IOption } from "types";

import { FormControl } from "components/Form";
import { Select } from "components/Select";

import { ItemType } from "modules/items/application";

import { itemTypeMessages } from "../../messages";

export const ItemTypeSelect = () => {
  const { formatMessage } = useIntl();

  const types = Array.from(Object.values(ItemType));
  const options: IOption[] = types.map((type) => ({
    label: formatMessage(itemTypeMessages[type]),
    value: type,
  }));

  return (
    <FormControl
      w="100%"
      name="type"
      label={formatMessage({
        id: "type",
        defaultMessage: "Rodzaj",
      })}
    >
      {(
        { setValue, getValues, register, setError, clearErrors },
        fieldProps
      ) => (
        <Select
          {...fieldProps}
          {...register("type")}
          placeholder={formatMessage({
            id: "type.placeholder",
            defaultMessage: "Wybierz rodzaj",
          })}
          options={options}
          value={getValues("type")}
          onChange={({ target: { value } }) => {
            if (!value) {
              setError("type", { message: "Należy wybrać rodzaj przedmiotu" });
              return;
            }

            setValue("type", value);
            clearErrors("type");
          }}
          onBlur={({ target: { value } }) => {
            if (!value) {
              setError("type", { message: "Należy wybrać rodzaj przedmiotu" });
              return;
            }
          }}
        />
      )}
    </FormControl>
  );
};
