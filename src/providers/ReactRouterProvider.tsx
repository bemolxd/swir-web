import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <QueryParamsProvider location={location} navigate={navigate}>
      {children}
    </QueryParamsProvider>
  );
};
