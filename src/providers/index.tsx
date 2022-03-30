import { IChildrenProp } from "types";

import { ChakraProvider } from "./ChakraProvider";
import { QueryParamsProvider } from "./QueryParamsProvider";
import { ReactIntlProvider } from "./ReactIntlProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReactRouterProvider } from "./ReactRouterProvider";

interface IProps extends IChildrenProp {}

export const Providers = ({ children }: IProps) => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider>
        <QueryParamsProvider>
          <ChakraProvider>
            <ReactIntlProvider>{children}</ReactIntlProvider>
          </ChakraProvider>
        </QueryParamsProvider>
      </ReactRouterProvider>
    </ReactQueryProvider>
  );
};
