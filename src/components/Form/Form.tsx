import { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";

type ChildrenFn<T extends object> = (data: UseFormReturn<T>) => ReactNode;

interface IProps<T extends object> extends UseFormProps<T> {
  onSubmit(model: T, methods: UseFormReturn<T>): void;
  children: ReactNode | ChildrenFn<T>;
  id: string;
  resetOnSubmit?: boolean;
}

export const Form = <T extends object>({
  onSubmit,
  children,
  id,
  resetOnSubmit = true,
  ...props
}: IProps<T>) => {
  const methods = useForm<T>({ mode: "all", ...props });

  const handleSubmit = async (model: any) => {
    await onSubmit(model, methods);
    resetOnSubmit && methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form noValidate id={id} onSubmit={methods.handleSubmit(handleSubmit)}>
        {typeof children === "function" ? children(methods) : children}
      </form>
    </FormProvider>
  );
};
