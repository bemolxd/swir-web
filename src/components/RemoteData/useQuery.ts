import { useQuery as useReactQuery } from "react-query";

import { api } from "utils";

interface IProps {
  queryKeys: string | string[];
  fetchPath: string;
  // params?: any //TODO
}

export const useQuery = <ResponseType extends unknown>({
  queryKeys,
  fetchPath,
}: IProps) => {
  const { data } = useReactQuery(
    queryKeys,
    async () => await api.get<ResponseType>(fetchPath)
  );

  return data?.data;
};
