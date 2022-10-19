import { EmptyList } from "components/AppState";
import { InfiniteList } from "components/List";
import { ContentLoading } from "components/Loading";
import { withSuspense } from "components/RemoteData";

import { ItemsResponse } from "../../../application";
import { useInfiniteItemsQuery } from "../../../infrastructure";
import { ItemsList } from "./ItemsList";

export const InfiniteItemsList = withSuspense(() => {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteItemsQuery();

  if (isLoading) return <ContentLoading />;

  if (!data || data?.pages[0]?.collection.length === 0) {
    return <EmptyList />;
  }

  return (
    <InfiniteList<ItemsResponse>
      data={data?.pages}
      limit={10}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
    >
      {({ collection }) => <ItemsList items={collection} />}
    </InfiniteList>
  );
});
