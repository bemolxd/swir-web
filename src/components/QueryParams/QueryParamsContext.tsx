import { useCallback, useEffect } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { createContext, useContextSelector } from "use-context-selector";
import { isEmpty } from "lodash";

import { IChildrenProp } from "types";

import { parseSearchParams } from "./parseSearchParams";

interface ContextStore {
  params: any;
  setParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined
  ) => void;
}

const context = createContext<ContextStore | null>(null);

interface ProviderProps extends IChildrenProp {}

export const QueryParamsProvider = ({ children }: ProviderProps) => {
  const [params, setParams] = useSearchParams();

  const serializeParams = useCallback(() => {
    let serializedParams = {};

    for (const entry of params.entries()) {
      const object = entry.reduce((property, value) =>
        Object.assign({ [property]: value.split(",") })
      );
      Object.assign(serializedParams, object);
    }

    return parseSearchParams(serializedParams);
  }, [params]);

  useEffect(() => {
    if (isEmpty(serializeParams())) {
      setParams({
        limit: "10",
        offset: "0",
      });
    }
  }, [serializeParams, setParams]);

  return (
    <context.Provider value={{ params: serializeParams(), setParams }}>
      {children}
    </context.Provider>
  );
};

export const useQueryParamsConsumer = <Selected extends unknown>(
  selector: (state: ContextStore) => Selected,
  fallbackValue?: Selected
) =>
  useContextSelector(context, (state) => {
    if (!state) {
      if (!!fallbackValue) {
        return fallbackValue;
      }
      throw Error(
        "useQueryParamsConsumer must be used within QueryParamsProvider"
      );
    }
    return selector(state);
  });
