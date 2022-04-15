import { useMeQuery } from "components/Auth";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { useUsersQuery } from "modules/users/infrastructure";
import { UsersList } from "modules/users/presentation";

export const Content = withSuspense(() => {
  const { params } = useQueryParams();
  const users = useUsersQuery(params);
  const me = useMeQuery();

  return (
    <UsersList
      users={users?.collection.filter((user) => user.userId !== me?.userId)}
    />
  );
});
