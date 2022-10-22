import { Pagination } from "components/Pagination";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { useOrdersQuery } from "modules/adminOrders/infrastructure";
import { OrdersList } from "modules/userOrders/presentation";

export const CasualList = withSuspense(() => {
  const { params } = useQueryParams();
  const orders = useOrdersQuery(params);

  return (
    <>
      <OrdersList orders={orders?.collection} />
      <Pagination meta={orders?.meta} />
    </>
  );
});
