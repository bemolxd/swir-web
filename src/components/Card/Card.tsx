import { Box, Fade, BoxProps, useColorModeValue } from "@chakra-ui/react";

interface IProps extends BoxProps {
  lightColor?: string;
  darkColor?: string;
  fade?: boolean;
}

export const Card = ({
  lightColor = "white",
  darkColor = "gray.700",
  fade = true,
  children,
  ...props
}: IProps) => {
  return (
    <Box
      as={fade ? Fade : undefined}
      in="true"
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
