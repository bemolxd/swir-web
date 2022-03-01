import { useMeQuery } from "./useMeQuery";

export const useGetContextType = () => {
  const me = useMeQuery();

  return me?.contextType;
};
