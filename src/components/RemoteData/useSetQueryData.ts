import { QueryKey, useQueryClient } from "react-query";
import { QueryData } from "./QueryData";

export const useSetQueryData = <Data>(keys: QueryKey) => {
  const queryClient = useQueryClient();

  return (data: QueryData<Data>) => {
    if (!data) return;

    queryClient.setQueryData<QueryData<Data>>(keys, data);
  };
};
