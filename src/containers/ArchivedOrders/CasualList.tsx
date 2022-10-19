import { Pagination } from "components/Pagination";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";
import { useArchivedOrdersQuery } from "modules/userOrders/infrastructure";
import { OrdersList } from "modules/userOrders/presentation";

export const CasualList = withSuspense(() => {
  const { params } = useQueryParams();
  const archivedOrders = useArchivedOrdersQuery(params);

  return (
    <>
      <OrdersList orders={archivedOrders?.collection} />
      <Pagination meta={archivedOrders?.meta!} />
    </>
  );
});
