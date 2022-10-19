import { EmptyList } from "components/AppState";
import { InfiniteList } from "components/List";
import { ContentLoading } from "components/Loading";
import { withSuspense } from "components/RemoteData";
import { OrdersResponse } from "../application";
import { useInfiniteArchivedOrdersQuery } from "../infrastructure";
import { OrdersList } from "./OrdersList";

export const InfiniteOrdersList = withSuspense(() => {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteArchivedOrdersQuery();

  if (isLoading) return <ContentLoading />;

  if (!data || data?.pages[0]?.collection.length === 0) {
    return <EmptyList />;
  }

  return (
    <InfiniteList<OrdersResponse>
      data={data?.pages}
      limit={10}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
    >
      {({ collection }) => <OrdersList orders={collection} />}
    </InfiniteList>
  );
});
