import { useIntl } from "react-intl";
import { IOption } from "types";

import { FormControl } from "components/Form";
import { Select } from "components/Select";

import { ItemCategory } from "modules/items/application";

import { itemCategoryMessages } from "../../messages";

export const ItemCategorySelect = () => {
  const { formatMessage } = useIntl();

  const categories = Array.from(Object.values(ItemCategory));
  const options: IOption[] = categories.map((category) => ({
    value: category,
    label: formatMessage(itemCategoryMessages[category]),
  }));

  return (
    <FormControl
      w="100%"
      name="category"
      label={formatMessage({
        id: "category",
        defaultMessage: "Kategoria",
      })}
    >
      {(
        { setValue, getValues, register, setError, clearErrors },
        fieldProps
      ) => (
        <Select
          {...fieldProps}
          {...register("category")}
          placeholder={formatMessage({
            id: "category.placeholder",
            defaultMessage: "Wybierz kategorię",
          })}
          options={options}
          value={getValues("category")}
          onChange={({ target: { value } }) => {
            if (!value) {
              setError("category", {
                message: "Należy wybrać kategorię przedmiotu",
              });
            }

            setValue("category", value);
            clearErrors("category");
          }}
          onBlur={({ target: { value } }) => {
            if (!value) {
              setError("category", {
                message: "Należy wybrać kategorię przedmiotu",
              });
              return;
            }
          }}
        />
      )}
    </FormControl>
  );
};
