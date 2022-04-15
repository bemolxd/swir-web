import { QueryKey, useQueryClient } from "react-query";
import { QueryData } from "./QueryData";

export const useSetQueryData = () => {
  const queryClient = useQueryClient();

  return <Data>(keys: QueryKey, data: QueryData<Data>) => {
    if (!data) return;

    queryClient.setQueryData<QueryData<Data>>(keys, data);
  };
};
