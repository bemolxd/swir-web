import { QueryKey, useQueryClient } from "react-query";

import { QueryData } from "./QueryData";

export const useGetQueryData = <PrevData = any>(keys: QueryKey) => {
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryData(keys);

  return queryData as QueryData<PrevData>;
};
