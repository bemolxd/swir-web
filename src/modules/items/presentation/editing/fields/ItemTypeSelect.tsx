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
      {({ setValue, getValues, register }, fieldProps) => (
        <Select
          {...fieldProps}
          {...register("type")}
          options={options}
          value={getValues("type")}
          onChange={(e) => setValue("type", e.target.value)}
        />
      )}
    </FormControl>
  );
};
