import { Divider, VStack } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

import { CheckboxFilterGroup } from "components/Filters";

import { ItemType } from "modules/items/application";

export const ItemTypeSection = () => {
  const { formatMessage } = useIntl();

  return (
    <VStack align="flex-start" w="100%" mb={2}>
      <CheckboxFilterGroup
        filterName="type"
        title={formatMessage({
          id: "ItemTypeFilters.title",
          defaultMessage: "Typ sprzętu:",
        })}
        options={options}
        messages={messages}
      />
      <Divider />
    </VStack>
  );
};

const options = Object.values(ItemType);

const messages = defineMessages({
  [ItemType.AUDIO]: {
    id: "TypeLabels.ItemType.Audio",
    defaultMessage: "Sprzęt audio",
  },
  [ItemType.VIDEO]: {
    id: "TypeLabels.ItemType.Video",
    defaultMessage: "Sprzęt wideo",
  },
});
