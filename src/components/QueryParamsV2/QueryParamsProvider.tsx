import { createContext, useContext } from "react";

import { IChildrenProp } from "types";

import { Location } from "./LocationManager";

export interface Values {
  location: Location;
  history: History;
}

type History = {
  push: Function;
  replace: Function;
};

interface IProps extends IChildrenProp {
  location: Location;
  history: History;
}

export const QueryParamsContext = createContext<Values | undefined>(undefined);

export const QueryParamsProvider = ({
  location,
  history,
  children,
}: IProps) => {
  return (
    <QueryParamsContext.Provider value={{ history, location }}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export const useQueryParamsConsumer = (): Values => {
  const value = useContext(QueryParamsContext);

  if (!value) {
    throw new Error(
      "QueryParamsConsumer must be used within QueryParamsProvider"
    );
  }

  return value;
};
