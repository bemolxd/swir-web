import { Divider, VStack } from "@chakra-ui/react";

import { Item } from "modules/items/application";

import { ImageSection } from "./ImageSection";
import { NameSection } from "./NameSection";
import { TypeCategorySection } from "./TypeCategorySection";

interface IProps {
  item: Item;
}

export const EditBasicInfoSection = ({ item }: IProps) => {
  return (
    <>
      <VStack w="100%" spacing={4}>
        <ImageSection imageUrl={item.imageUrl} />
        <Divider />
        <NameSection />
        <TypeCategorySection />
        <Divider />
      </VStack>
    </>
  );
};
