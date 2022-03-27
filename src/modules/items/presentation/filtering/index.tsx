import { Divider, HStack } from "@chakra-ui/react";

import { DisplayTypeButtons } from "./DisplayTypeButtons";
import { MoreFilters } from "./MoreFilters";
import { Searchbox } from "./Searchbox";

export const FilterSection = () => {
  return (
    <HStack justify="flex-end" mt={2}>
      <DisplayTypeButtons />
      <Divider orientation="vertical" h="20px" />
      <Searchbox />
      <Divider orientation="vertical" h="20px" />
      <MoreFilters />
    </HStack>
  );
};
