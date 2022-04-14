import { useNavigate } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

import { SimpleListItem } from "components/List";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import { SelectedItem } from "modules/userOrders/application";

import { DeleteSelectedItemButton } from "../../DeleteSelectedItemButton";

interface IProps {
  item: SelectedItem;
  orderId: string;
}

export const SelectedItemComponent = ({ item, orderId }: IProps) => {
  const selectedItem = useItemDetailsQuery(item.itemId);
  const navigate = useNavigate();

  return (
    <SimpleListItem onClick={() => navigate(`/sprzet/${item.itemId}`)}>
      <HStack w="100%" justify="space-between">
        <HStack w="100%">
          <Text fontSize="18px">{selectedItem?.name} •</Text>
          <Text textTransform="uppercase" textColor="gray.500">
            {selectedItem?.vendor}
          </Text>
        </HStack>
        <DeleteSelectedItemButton itemId={item.itemId} orderId={orderId} />
      </HStack>
    </SimpleListItem>
  );
};
