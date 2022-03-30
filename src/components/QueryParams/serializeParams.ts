import { useCallback } from "react";

import { IQueryParams } from "types";

import { parseSearchParams } from "./parseSearchParams";

export const useSerializeParams = <Params extends IQueryParams>(
  params: URLSearchParams
) =>
  useCallback(() => {
    let serializedParams = {};

    for (const entry of params.entries()) {
      const object = entry.reduce((key, value) =>
        Object.assign({ [key]: value.split(",") })
      );

      Object.assign(serializedParams, object);
    }

    return parseSearchParams(serializedParams) as Params;
  }, [params])();
