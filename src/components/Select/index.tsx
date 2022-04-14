import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react";

import { IOption } from "types";

interface IProps extends SelectProps {
  options: IOption[];
}

export const Select = ({ options, ...props }: IProps) => {
  return (
    <ChakraSelect {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </ChakraSelect>
  );
};
