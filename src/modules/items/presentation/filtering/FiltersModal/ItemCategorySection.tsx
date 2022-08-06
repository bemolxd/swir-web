import { Divider, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { CheckboxFilterGroup } from "components/Filters";

import { ItemCategory } from "modules/items/application";

import { itemCategoryMessages } from "../../messages";

export const ItemCategorySection = () => {
  const { formatMessage } = useIntl();
  const options = Object.values(ItemCategory);

  return (
    <VStack align="flex-start" w="100%" mb={2}>
      <CheckboxFilterGroup
        filterName="category"
        title={formatMessage({
          id: "ItemCategoryFilters.title",
          defaultMessage: "Kategoria:",
        })}
        options={options}
        messages={itemCategoryMessages}
      />
      <Divider />
    </VStack>
  );
};
