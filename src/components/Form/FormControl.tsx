import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { get } from "lodash";
import { ReactElement, ReactNode } from "react";
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";

interface IProps extends Omit<FormControlProps, "children" | "label"> {
  children(
    methods: UseFormReturn,
    controllerProps: ControllerRenderProps,
    innerProps: InnerProps
  ): ReactElement;
  name: string;
  helperText?: ReactNode;
  label?: ReactNode;
}

interface InnerProps {
  isInvalid: boolean;
}

export const FormControl = ({
  children,
  name,
  helperText,
  isRequired = true,
  label,
  ...props
}: IProps) => {
  const methods = useFormContext();
  const isInvalid = !!get(methods.formState.errors, name);

  return (
    <ChakraFormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        render={(props) => children(methods, props as any, { isInvalid })}
      />
      <FormErrorMessage lineHeight="1rem">
        {get(methods.formState.errors, name)?.message}
      </FormErrorMessage>
      <FormHelperText lineHeight="1rem">{helperText}</FormHelperText>
    </ChakraFormControl>
  );
};
