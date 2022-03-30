import { HStack, Divider, VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";
import { Image } from "components/Image";

import { Item } from "modules/items/application";
import { BasicInfoContent } from "./BasicInfoContent";

interface IProps {
  details: Item;
}

export const BasicInfoSection = ({ details }: IProps) => {
  const isMobile = useCheckMobile();

  if (isMobile) {
    return (
      <>
        <VStack spacing={2} w="100%">
          <Image src={details.imageUrl} w="400px" borderRadius={8} my={1} />
          <BasicInfoContent details={details} />
        </VStack>
        <Divider />
      </>
    );
  }

  return (
    <>
      <HStack align="flex-start" justify="space-between" w="100%">
        <Image src={details.imageUrl} w="400px" borderRadius={8} my={1} />
        <BasicInfoContent details={details} />
      </HStack>
      <Divider />
    </>
  );
};
