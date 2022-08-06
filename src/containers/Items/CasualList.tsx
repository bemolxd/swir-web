import { Pagination } from "components/Pagination";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { useItemsViewHandler } from "modules/items/application";
import { useItemsQuery } from "modules/items/infrastructure";
import { ItemsGrid, ItemsList } from "modules/items/presentation";

export const CasualList = withSuspense(() => {
  const { params } = useQueryParams();
  const items = useItemsQuery(params);
  const view = useItemsViewHandler((handler) => handler.view);

  return (
    <>
      {view === "grid" ? (
        <ItemsGrid items={items?.collection} />
      ) : (
        <ItemsList items={items?.collection} />
      )}
      <Pagination meta={items?.meta!} />
    </>
  );
});
