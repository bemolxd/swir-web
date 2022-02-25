import {
  extendTheme,
  ChakraProvider as ChakraReactProvider,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";

import { IChildrenProp } from "types";

const customTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  // styles: {
  //   global: (props: any) => ({
  //     body: {
  //       bg: mode("#FAFAFA", "000")(props),
  //     },
  //   }),
  // },
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
