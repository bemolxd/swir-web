import { useQuery } from "components/RemoteData";

import { UsersResponse } from "../application";

export const getAdminsQueryKey = () => "admins";

export const useAdminsQuery = () => {
  const data = useQuery<UsersResponse>({
    queryKeys: getAdminsQueryKey(),
    fetchPath: getAdminsQueryKey(),
  });

  return data;
};
