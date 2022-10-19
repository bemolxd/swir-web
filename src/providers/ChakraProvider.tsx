import {
  extendTheme,
  ChakraProvider as ChakraReactProvider,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { GlobalProps } from "@emotion/react";

import { IChildrenProp } from "types";

const customTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props: GlobalProps) => ({
      body: {
        bg: mode("#FAFAFA", "gray.800")(props),
      },
    }),
  },
});

interface IProps extends IChildrenProp {}

export const ChakraProvider = ({ children }: IProps) => {
  return (
    <ChakraReactProvider theme={customTheme}>
      <ColorModeScript />
      <CSSReset />
      {children}
    </ChakraReactProvider>
  );
};
