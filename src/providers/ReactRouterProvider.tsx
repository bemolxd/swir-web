import { BrowserRouter, useHistory, useLocation } from "react-router-dom";

import { IChildrenProp } from "types";

import { QueryParamsProvider } from "components/QueryParamsV2";

interface IProps extends IChildrenProp {}

export const ReactRouterProvider = ({ children }: IProps) => {
  return (
    <BrowserRouter>
      <RouterQueryParamsProvider>{children}</RouterQueryParamsProvider>
    </BrowserRouter>
  );
};

interface IContextProviderProps extends IChildrenProp {}

export const RouterQueryParamsProvider = ({
  children,
}: IContextProviderProps) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <QueryParamsProvider location={location} history={history}>
      {children}
    </QueryParamsProvider>
  );
};
