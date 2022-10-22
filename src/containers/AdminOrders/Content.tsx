import { VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { InfiniteAdminOrdersList } from "modules/adminOrders/presentation";

import { CasualList } from "./CasualList";

export const Content = () => {
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%">
      {isMobile ? <InfiniteAdminOrdersList /> : <CasualList />}
    </VStack>
  );
};
