import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { get } from "lodash";
import { ReactElement, ReactNode } from "react";
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";

interface IProps extends Omit<FormControlProps, "children"> {
  children(
    methods: UseFormReturn,
    controllerProps: ControllerRenderProps,
    innerProps: InnerProps
  ): ReactElement;
  name: string;
  helperText?: ReactNode;
}

interface InnerProps {
  isInvalid: boolean;
}

export const FormControl = ({
  children,
  name,
  helperText,
  isRequired = true,
  ...props
}: IProps) => {
  const methods = useFormContext();
  const isInvalid = !!get(methods.formState.errors, name);

  return (
    <ChakraFormControl
      mb={2}
      isRequired={isRequired}
      isInvalid={isInvalid}
      {...props}
    >
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
