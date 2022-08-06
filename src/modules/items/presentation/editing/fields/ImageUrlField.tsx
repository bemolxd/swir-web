import { useIntl } from "react-intl";
import { Input } from "@chakra-ui/react";

import { FormControl } from "components/Form";

interface IProps {
  onImageChange(val: string): void;
}

export const ImageUrlField = ({ onImageChange }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      w="100%"
      name="imageUrl"
      label={formatMessage({
        id: "imageUrl",
        defaultMessage: "Adres grafiki",
      })}
      isRequired={false}
    >
      {({ setValue, register }, fieldProps) => (
        <Input
          {...fieldProps}
          {...register("imageUrl")}
          onChange={(e) => {
            setValue("imageUrl", e.target.value);
            onImageChange(e.target.value);
          }}
          placeholder={formatMessage({
            id: "imageUrl.placeholder",
            defaultMessage: "Wprowadź adres URL obrazka",
          })}
        />
      )}
    </FormControl>
  );
};
