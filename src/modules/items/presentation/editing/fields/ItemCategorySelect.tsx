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
      {({ setValue, getValues, register }, fieldProps) => (
        <Select
          {...fieldProps}
          {...register("category")}
          options={options}
          value={getValues("category")}
          onChange={({ target: { value } }) => setValue("category", value)}
        />
      )}
    </FormControl>
  );
};
