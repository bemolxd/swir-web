import { VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { InfiniteUserOrdersList } from "modules/userOrders/presentation";

import { CasualList } from "./CasualList";

export const Content = () => {
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%" align="flex-start">
      {isMobile ? <InfiniteUserOrdersList /> : <CasualList />}
    </VStack>
  );
};
