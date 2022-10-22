import { Pagination } from "components/Pagination";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { UsersList } from "modules/users/presentation";
import { useUsersQuery } from "modules/users/infrastructure";

export const CasualList = withSuspense(() => {
  const { params } = useQueryParams();
  const users = useUsersQuery(params);

  return (
    <>
      <UsersList users={users?.collection} />
      <Pagination meta={users?.meta} />
    </>
  );
});
