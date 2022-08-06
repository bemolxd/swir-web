import { Image as ChakraImage, ImageProps } from "@chakra-ui/react";

interface IProps extends Omit<ImageProps, "fallbackSrc"> {}

export const IMAGE_FALLBACK_SRC =
  "https://via.placeholder.com/150?text=Oops!+No+image?";

export const Image = (props: IProps) => {
  return (
    <ChakraImage
      key={IMAGE_FALLBACK_SRC}
      {...props}
      objectFit="cover"
      fallbackSrc={IMAGE_FALLBACK_SRC}
    />
  );
};
