import { Box, Fade, BoxProps, useColorModeValue } from "@chakra-ui/react";

interface IProps extends BoxProps {
  lightColor?: string;
  darkColor?: string;
}

export const Card = ({
  lightColor = "white",
  darkColor = "gray.700",
  children,
  ...props
}: IProps) => {
  return (
    <Box
      as={Fade}
      in
      bgColor={useColorModeValue(lightColor, darkColor)}
      borderRadius={4}
      boxShadow="md"
      p={4}
      {...props}
    >
      {children}
    </Box>
  );
};
