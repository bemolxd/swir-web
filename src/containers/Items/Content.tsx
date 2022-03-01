import { withSuspense } from "components/RemoteData";

import { useItemsQuery } from "modules/items/infrastructure";
import { ItemsList } from "modules/items/presentation";

export const Content = withSuspense(() => {
  const items = useItemsQuery();

  return <ItemsList items={items?.collection} />;
});
