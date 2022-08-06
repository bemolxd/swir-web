import { Divider, VStack } from "@chakra-ui/react";

import { ImageSection } from "../editing/BasicInfo/ImageSection";
import { NameSection } from "../editing/BasicInfo/NameSection";
import { TypeCategorySection } from "../editing/BasicInfo/TypeCategorySection";

export const CreateBasicInfoSection = () => {
  return (
    <VStack w="100%" spacing={4}>
      <ImageSection />
      <Divider />
      <NameSection />
      <TypeCategorySection />
      <Divider />
    </VStack>
  );
};
