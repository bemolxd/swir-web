import { VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { InfiniteArchivedOrdersList } from "modules/userOrders/presentation";

import { CasualList } from "./CasualList";

export const Content = () => {
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%">
      {isMobile ? <InfiniteArchivedOrdersList /> : <CasualList />}
    </VStack>
  );
};
