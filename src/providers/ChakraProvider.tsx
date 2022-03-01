import {
  extendTheme,
  ChakraProvider as ChakraReactProvider,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { IChildrenProp } from "types";

const customTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props: any) => ({
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
