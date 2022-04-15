import { QueryKey, useQueryClient } from "react-query";

export const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  return (keys: QueryKey) => queryClient.invalidateQueries(keys);
};
