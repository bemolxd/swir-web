import { HStack } from "@chakra-ui/react";
import { MdEast } from "react-icons/md";

import { DateFromSelect } from "./DateFromSelect";
import { DateToSelect } from "./DateToSelect";

export const DateSelects = () => {
  return (
    <HStack align="flex-start" justify="center">
      <DateFromSelect />
      <MdEast fontSize="40px" />
      <DateToSelect />
    </HStack>
  );
};
