import { EmptyList } from "components/AppState";
import { InfiniteList } from "components/List";
import { ContentLoading } from "components/Loading";
import { withSuspense } from "components/RemoteData";

import { OrdersResponse } from "modules/userOrders/application";
import { OrdersList } from "modules/userOrders/presentation";

import { useInfiniteUserDetailOrders } from "../infrastructure";

interface IProps {
  userId: string;
}

export const InfiniteUserDetailOrdersList = withSuspense(
  ({ userId }: IProps) => {
    const { data, isLoading, hasNextPage, fetchNextPage } =
      useInfiniteUserDetailOrders(userId);

    if (isLoading) return <ContentLoading />;

    if (!data || data.pages[0].collection.length === 0) return <EmptyList />;

    return (
      <InfiniteList<OrdersResponse>
        data={data.pages}
        limit={10}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
      >
        {({ collection }) => <OrdersList orders={collection} />}
      </InfiniteList>
    );
  }
);
