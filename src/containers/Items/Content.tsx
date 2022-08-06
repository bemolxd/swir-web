import { VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { InfiniteItemsList } from "modules/items/presentation";

import { CasualList } from "./CasualList";

export const Content = () => {
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%">
      {isMobile ? <InfiniteItemsList /> : <CasualList />}
    </VStack>
  );
};
