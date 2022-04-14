import { useEffect, useRef, useState } from "react";

import { useDebounce } from "utils";

import { useQueryParams } from "components/QueryParamsV2";

export const useFilterInput = (filterName: string, delay = 400) => {
  const { params, change, remove, resetPagination } = useQueryParams();

  const param = (params as any)[filterName] ?? "";
  const [state, setState] = useState<string>(param);
  const currentState = useRef<string>(state);
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (param !== currentState.current) {
      currentState.current = param;
      setState(param);
    }
  }, [param]);

  useEffect(() => {
    if (!state) {
      setState("");
      remove(filterName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useDebounce(
    () => {
      if (!didMountRef.current) {
        didMountRef.current = true;
        return;
      }

      if (!state) return;

      change(filterName, state);
      //TODO: naprawić zachowanie resetowania paginacji
      resetPagination(filterName);
    },
    delay,
    [state]
  );

  const onChange = (value: string) => {
    currentState.current = value;
    setState(value);
  };

  return {
    onChange,
    value: state,
  };
};
