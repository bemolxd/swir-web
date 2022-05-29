import { buildUrl } from "utils";

import { useQuery } from "components/RemoteData";

import { UsersQueryParams, UsersResponse } from "../application";

export const getUsersQueryKey = (params?: UsersQueryParams) =>
  buildUrl("users", params);

export const useUsersQuery = (params?: UsersQueryParams) => {
  const data = useQuery<UsersResponse>(
    getUsersQueryKey(params),
    getUsersQueryKey(params)
  );

  return data;
};
