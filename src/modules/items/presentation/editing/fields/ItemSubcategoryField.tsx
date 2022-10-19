import { Input, InputProps } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

interface IProps extends InputProps {}

export const ItemSubcategoryField = (inputProps: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      {...inputProps}
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
          onChange={(e) => setValue("subcategory", e.target.value)}
          placeholder={formatMessage({
            id: "subcategory.placeholder",
            defaultMessage: "Wprowadź podkategorię",
          })}
        />
      )}
    </FormControl>
  );
};
