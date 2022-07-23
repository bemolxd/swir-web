import { Input } from "@chakra-ui/input";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

export const ItemSubcategoryField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      w="50%"
      name="subcategory"
      label={formatMessage({
        id: "subcategory",
        defaultMessage: "Podkategoria",
      })}
      isRequired={false}
    >
      {({ setValue, register }, fieldProps) => (
        <Input
          {...fieldProps}
          {...register("subcategory")}
          onChange={(e) => setValue("name", e.target.value)}
          placeholder={formatMessage({
            id: "subcategory.placeholder",
            defaultMessage: "Wprowadź podkategorię",
          })}
        />
      )}
    </FormControl>
  );
};
