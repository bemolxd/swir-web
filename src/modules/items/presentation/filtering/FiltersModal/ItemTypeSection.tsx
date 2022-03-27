import { Divider, VStack, Text, Checkbox } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export const ItemTypeSection = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <VStack align="flex-start">
        <Text>
          {formatMessage({
            id: "Items.filtering.filterModal.itemTypeTitle",
            defaultMessage: "Typ sprzętu:",
          })}
        </Text>
        <Checkbox>
          {formatMessage({
            id: "Items.filtering.filterModal.itemType.audio",
            defaultMessage: "Sprzęt audio",
          })}
        </Checkbox>
        <Checkbox>
          {formatMessage({
            id: "Items.filtering.filterModal.itemType.video",
            defaultMessage: "Sprzęt wideo",
          })}
        </Checkbox>
      </VStack>
      <Divider my={4} />
    </>
  );
};
