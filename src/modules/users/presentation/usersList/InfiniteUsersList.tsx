import { EmptyList } from "components/AppState";
import { InfiniteList } from "components/List";
import { ContentLoading } from "components/Loading";
import { withSuspense } from "components/RemoteData";

import { UsersResponse } from "modules/users/application";
import { useInfiniteUsersQuery } from "modules/users/infrastructure";

import { UsersList } from "./UsersList";

export const InfiniteUsersList = withSuspense(() => {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteUsersQuery();

  if (isLoading) return <ContentLoading />;

  if (!data || data?.pages[0]?.collection.length === 0) {
    return <EmptyList />;
  }

  return (
    <InfiniteList<UsersResponse>
      data={data?.pages}
      limit={10}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
    >
      {({ collection }) => <UsersList users={collection} />}
    </InfiniteList>
  );
});
