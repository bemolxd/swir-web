import { createContext, useContext } from "react";
import { NavigateFunction } from "react-router";

import { IChildrenProp } from "types";

import { Location } from "./LocationManager";

export interface Values {
  location: Location;
  navigate: NavigateFunction;
}

interface IProps extends IChildrenProp {
  location: Location;
  navigate: NavigateFunction;
}

export const QueryParamsContext = createContext<Values | undefined>(undefined);

export const QueryParamsProvider = ({
  location,
  navigate,
  children,
}: IProps) => {
  return (
    <QueryParamsContext.Provider value={{ location, navigate }}>
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
