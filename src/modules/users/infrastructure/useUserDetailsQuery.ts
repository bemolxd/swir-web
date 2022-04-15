import { useQuery } from "components/RemoteData";

import { User } from "../application";

export const getUserDetailsQueryKey = (userId: string) => `users/${userId}`;

export const useUserDetailsQuery = (userId: string) => {
  const data = useQuery<User>({
    queryKeys: getUserDetailsQueryKey(userId),
    fetchPath: getUserDetailsQueryKey(userId),
  });

  return data;
};
