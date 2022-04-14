import {
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { SimpleListItem } from "components/List";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import { SelectedItem } from "modules/userOrders/application";

import { DeleteSelectedItemButton } from "../../DeleteSelectedItemButton";

interface IProps {
  item: SelectedItem;
  orderId: string;
  index: number;
}

export const SelectedListItem = ({ item, orderId, index }: IProps) => {
  const selectedItem = useItemDetailsQuery(item.itemId);
  const { register, setValue } = useFormContext();
  const fieldId = `items[${index}].quantity`;

  return (
    <SimpleListItem>
      <HStack w="100%" justify="space-between">
        <HStack w="100%">
          <Text fontSize="18px">{selectedItem?.name} •</Text>
          <Text textTransform="uppercase" textColor="gray.500">
            {selectedItem?.vendor}
          </Text>
        </HStack>
        <NumberInput
          maxW={16}
          w="100%"
          defaultValue={item.quantity}
          min={1}
          max={selectedItem?.quantity}
          onChange={(value) => setValue(fieldId, value)}
        >
          <NumberInputField {...register(fieldId)} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <DeleteSelectedItemButton itemId={item.itemId} orderId={orderId} />
      </HStack>
    </SimpleListItem>
  );
};
