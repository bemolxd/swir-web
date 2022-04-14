import { isEmpty, omit } from "lodash";

import { IQueryParams } from "types";

export const filtersAreApplied = <Params extends IQueryParams>(
  params: Params
) => !isEmpty(omit(params, ["limit", "offset", "search"]));
