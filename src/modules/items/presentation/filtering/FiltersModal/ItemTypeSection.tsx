import { Divider, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { CheckboxFilterGroup } from "components/Filters";

import { ItemType } from "modules/items/application";

import { itemTypeMessages } from "../../messages";

export const ItemTypeSection = () => {
  const { formatMessage } = useIntl();
  const options = Object.values(ItemType);

  return (
    <VStack align="flex-start" w="100%" mb={2}>
      <CheckboxFilterGroup
        filterName="type"
        title={formatMessage({
          id: "ItemTypeFilters.title",
          defaultMessage: "Typ sprzętu:",
        })}
        options={options}
        messages={itemTypeMessages}
      />
      <Divider />
    </VStack>
  );
};
