import { HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

import { Image } from "components/Image";
import { useCheckMobile } from "components/Layout";

import { ImageUrlField } from "../fields/ImageUrlField";

interface IProps {
  imageUrl?: string;
}

export const ImageSection = ({ imageUrl }: IProps) => {
  const [image, setImage] = useState<string | undefined>(imageUrl);
  const isMobile = useCheckMobile();

  if (isMobile) {
    return (
      <VStack align="center" justify="flex-start" w="100%" spacing={4}>
        <Image key={imageUrl} src={image} boxSize="128px" borderRadius={8} />
        <ImageUrlField onImageChange={setImage} />
      </VStack>
    );
  }

  return (
    <HStack align="center" justify="flex-start" w="100%" spacing={4}>
      <Image key={imageUrl} src={image} boxSize="128px" borderRadius={8} />
      <ImageUrlField onImageChange={setImage} />
    </HStack>
  );
};
