import {
  extendTheme,
  ChakraProvider as ChakraReactProvider,
} from "@chakra-ui/react";

import { IChildrenProp } from "types";

const customTheme = extendTheme({});

interface IProps extends IChildrenProp {}

export const ChakraProvider = ({ children }: IProps) => {
  return (
    <ChakraReactProvider theme={customTheme}>{children}</ChakraReactProvider>
  );
};
