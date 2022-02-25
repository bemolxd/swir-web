import { BrowserRouter } from "react-router-dom";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const ReactRouterProvider = ({ children }: IProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
