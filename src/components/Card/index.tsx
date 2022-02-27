import { Box, Fade, BoxProps, useColorModeValue } from "@chakra-ui/react";

interface IProps extends Omit<BoxProps, "bgColor"> {
  lightColor?: string;
  darkColor?: string;
}

export const index = ({
  lightColor = "white",
  darkColor = "gray.700",
  children,
  ...props
}: IProps) => {
  return (
    <Fade in>
      <Box
        bgColor={useColorModeValue(lightColor, darkColor)}
        {...props}
        borderRadius={4}
        boxShadow="md"
        p={4}
      >
        {children}
      </Box>
    </Fade>
  );
};
