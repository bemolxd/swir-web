import { VStack } from "@chakra-ui/react";

import { Pagination } from "components/Pagination";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { useArchivedOrdersQuery } from "modules/userOrders/infrastructure";
import { OrdersList } from "modules/userOrders/presentation";

export const Content = withSuspense(() => {
  const { params } = useQueryParams();
  const archivedOrders = useArchivedOrdersQuery(params);

  return (
    <VStack w="100%">
      <OrdersList orders={archivedOrders.collection!} />
      <Pagination meta={archivedOrders.meta!} />
    </VStack>
  );
});
