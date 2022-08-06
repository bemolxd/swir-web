import { ContextType } from "types";

import { useMeQuery } from "./useMeQuery";

export const useGetContextType = () => {
  const me = useMeQuery();

  const isGlobal = me?.contextType === ContextType.GLOBAL;
  const isTech = me?.contextType === ContextType.TECH;
  const isUser = me?.contextType === ContextType.USER;

  return {
    isGlobal,
    isTech,
    isUser,
    contextType: me?.contextType,
  };
};
