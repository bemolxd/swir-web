import { VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { InfiniteOrdersList } from "modules/userOrders/presentation";

import { CasualList } from "./CasualList";

export const Content = () => {
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%">
      {isMobile ? <InfiniteOrdersList /> : <CasualList />}
    </VStack>
  );
};
