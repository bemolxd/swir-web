import { QueryParamProvider } from "use-query-params";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const QueryParamsProvider = ({ children }: IProps) => {
  return <QueryParamProvider>{children}</QueryParamProvider>;
};
