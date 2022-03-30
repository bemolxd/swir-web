import { NavigateOptions, useSearchParams } from "react-router-dom";

import { IQueryParams } from "types";

import { useSerializeParams } from "./serializeParams";

const JSURL = require("jsurl");

export const useQueryParams = <Params extends IQueryParams>() => {
  const [params, setParams] = useSearchParams();

  const set = (key: string, value: any, options?: NavigateOptions) => {
    let newSearchParams = new URLSearchParams(params);
    newSearchParams.set(key, JSURL.stringify(value));
    setParams(newSearchParams, options);
  };

  const serializedParams = useSerializeParams<Params>(params);

  return { params: serializedParams, set, setAll: setParams };
};
