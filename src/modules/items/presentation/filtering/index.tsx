import { Divider, HStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { DisplayTypeButtons } from "./DisplayTypeButtons";
import { MoreFilters } from "./MoreFilters";
import { Searchbox } from "./Searchbox";

export const FilterSection = () => {
  const isMobile = useCheckMobile();

  return (
    <HStack justify={isMobile ? "center" : "flex-end"} mt={2}>
      {!isMobile && (
        <>
          <DisplayTypeButtons />
          <Divider orientation="vertical" h="20px" />
        </>
      )}
      <Searchbox />
      <Divider orientation="vertical" h="20px" />
      <MoreFilters />
    </HStack>
  );
};
