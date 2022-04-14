import { useFormContext } from "react-hook-form";
import { HStack } from "@chakra-ui/react";
import { MdEast } from "react-icons/md";

import { DatePicker } from "components/DatePicker";

import { DateFromSelect } from "./DateFromSelect";

export const DateSelects = () => {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext<{ dateFrom: any; dateTo: any }>();

  return (
    <HStack align="flex-start">
      <DateFromSelect />
      <MdEast size={"32px"} />
      <DatePicker
        {...register("dateTo", { required: true })}
        placeholderText="Data zakończenia"
        onChange={(date) => {
          setValue("dateTo", date);
        }}
        isInvalid={!!errors.dateTo}
      />
    </HStack>
  );
};
