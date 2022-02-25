import { IChildrenProp } from "types";

import { ChakraProvider } from "./ChakraProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";

interface IProps extends IChildrenProp {}

export const Providers = ({ children }: IProps) => {
  return (
    <ReactQueryProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ReactQueryProvider>
  );
};
