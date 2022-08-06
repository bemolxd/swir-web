import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { isNil } from "lodash";

import { FormControl } from "components/Form";

export const ItemQuantityField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      maxW={32}
      w="100%"
      name="quantity"
      label={formatMessage({ id: "quantity", defaultMessage: "Ilość" })}
    >
      {(
        { setValue, getValues, register, setError, clearErrors },
        fieldProps
      ) => (
        <NumberInput
          {...fieldProps}
          defaultValue={getValues("quantity")}
          min={1}
          onChange={(val) => {
            const quantity = parseInt(val);

            if (quantity < 1) {
              setError("quantity", {
                message: "Ilość nie może być mniejsza od 1",
              });
              return;
            }

            if (isNaN(quantity) || isNil(quantity)) {
              setError("quantity", {
                message: "Ilość nie może być pusta",
              });
              return;
            }

            setValue("quantity", parseInt(val));
            clearErrors("quantity");
          }}
          onBlur={(e) => {
            const quantity = parseInt(e.target.value);

            if (quantity < 1) {
              setError("quantity", {
                message: "Ilość nie może być mniejsza od 1",
              });
              return;
            }

            if (isNaN(quantity) || isNil(quantity)) {
              setError("quantity", {
                message: "Ilość nie może być pusta",
              });
              return;
            }
          }}
        >
          <NumberInputField {...register("quantity")} onBlur={() => {}} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}
    </FormControl>
  );
};
