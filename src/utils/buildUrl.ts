import { stringify } from "query-string";
import { isEmpty } from "lodash";

import { IQueryParams } from "../types";

export const buildUrl = <Params extends IQueryParams>(
  path: string,
  params?: Params
) => {
  if (!params || isEmpty(params)) {
    return path;
  }

  return `${path}?${stringify(params, { arrayFormat: "comma" })}`;
};
