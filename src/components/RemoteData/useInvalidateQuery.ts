import { QueryKey, useQueryClient } from "react-query";

export const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  return async (keys: QueryKey) => await queryClient.invalidateQueries(keys);
};
