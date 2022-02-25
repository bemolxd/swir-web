import { IChildrenProp } from "types";

import { ChakraProvider } from "./ChakraProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReactRouterProvider } from "./ReactRouterProvider";

interface IProps extends IChildrenProp {}

export const Providers = ({ children }: IProps) => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ReactRouterProvider>
    </ReactQueryProvider>
  );
};
