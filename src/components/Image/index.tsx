import { Image as ChakraImage, ImageProps } from "@chakra-ui/react";

interface IProps extends Omit<ImageProps, "fallbackSrc"> {}

export const Image = (props: IProps) => {
  return (
    <ChakraImage
      {...props}
      objectFit="cover"
      fallbackSrc="https://via.placeholder.com/150?text=Oops!+No+image?"
    />
  );
};
