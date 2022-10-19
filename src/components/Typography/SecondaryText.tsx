import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

interface IProps extends TextProps {}

export const SecondaryText = ({ children, textColor, ...props }: IProps) => {
  const selColor = useColorModeValue("black", "white");
  const selBg = useColorModeValue("gray.300", "gray.600");

  return (
    <Text
      {...props}
      textColor={textColor ?? "gray.500"}
      _selection={{ textColor: selColor, background: selBg }}
    >
      {children}
    </Text>
  );
};
