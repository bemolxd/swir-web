import { withSuspense } from "components/RemoteData";
import { useCheckMobile } from "components/Layout";
import { Pagination } from "components/Pagination";

import { useItemsQuery } from "modules/items/infrastructure";
import { ItemsGrid, ItemsList } from "modules/items/presentation";
import { useItemsViewHandler } from "modules/items/application";
import { useQueryParams } from "components/QueryParamsV2";

export const Content = withSuspense(() => {
  const { params } = useQueryParams();
  const items = useItemsQuery(params);
  const view = useItemsViewHandler((handler) => handler.view);
  const isMobile = useCheckMobile();

  if (isMobile)
    return (
      <>
        <ItemsList items={items?.collection} />
        <Pagination meta={items?.meta!} />
      </>
    );

  if (view === "grid")
    return (
      <>
        <ItemsGrid items={items?.collection} />
        <Pagination meta={items?.meta!} />
      </>
    );

  return (
    <>
      <ItemsList items={items?.collection} />
      <Pagination meta={items?.meta!} />
    </>
  );
});
