import {
  forwardRef,
  Select as ChakraSelect,
  SelectProps,
} from "@chakra-ui/react";

import { IOption } from "types";

interface IProps extends SelectProps {
  options: IOption[];
}

export const Select = forwardRef(({ options, ...props }: IProps, ref) => {
  return (
    <ChakraSelect {...props} ref={ref}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </ChakraSelect>
  );
});
