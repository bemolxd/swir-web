import { Divider, VStack } from "@chakra-ui/react";

import { ItemDetailsField } from "./fields/ItemDetailsField";
import { ItemParametersField } from "./fields/ItemParametersField";

export const EditDetailsSection = () => {
  return (
    <VStack w="100%" align="center" spacing={4}>
      <ItemDetailsField />
      <ItemParametersField />
      <Divider />
    </VStack>
  );
};
