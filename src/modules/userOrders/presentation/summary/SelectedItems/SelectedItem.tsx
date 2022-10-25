import {
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { SimpleListItem } from "components/List";
import { useCheckMobile } from "components/Layout";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import { SelectedItem } from "modules/userOrders/application";

import { DeleteSelectedItemButton } from "../../DeleteSelectedItemButton";
import { SecondaryText } from "components/Typography";

interface IProps {
  item: SelectedItem;
  orderId: string;
  index: number;
}

export const SelectedListItem = ({ item, orderId, index }: IProps) => {
  const isMobile = useCheckMobile();
  const selectedItem = useItemDetailsQuery(item.itemId);
  const { setValue, getValues } = useFormContext();
  const items: SelectedItem[] = getValues("items");
  const fieldId = `items[${index}].quantity`;

  return (
    <SimpleListItem>
      <HStack w="100%" justify="space-between">
        {isMobile ? (
          <VStack w="100%" align="flex-start">
            <Text fontSize="18px">{selectedItem?.name}</Text>
            <SecondaryText textTransform="uppercase">
              {selectedItem?.vendor}
            </SecondaryText>
          </VStack>
        ) : (
          <HStack w="100%">
            <Text fontSize="18px">{selectedItem?.name} •</Text>
            <SecondaryText textTransform="uppercase">
              {selectedItem?.vendor}
            </SecondaryText>
          </HStack>
        )}
        <NumberInput
          maxW={16}
          w="100%"
          defaultValue={item.quantity}
          min={1}
          max={selectedItem?.quantity}
          onChange={(value) => setValue(fieldId, parseInt(value))}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <DeleteSelectedItemButton
          itemId={item.itemId}
          orderId={orderId}
          formAction={() => {
            setValue(
              "items",
              items.filter((i) => i.itemId !== item.itemId)
            );
          }}
        />
      </HStack>
    </SimpleListItem>
  );
};
