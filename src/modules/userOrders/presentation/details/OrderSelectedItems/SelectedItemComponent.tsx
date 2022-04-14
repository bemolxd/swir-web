import { useNavigate } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

import { SimpleListItem } from "components/List";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import { OrderStatus, SelectedItem } from "modules/userOrders/application";

import { DeleteSelectedItemButton } from "../../DeleteSelectedItemButton";

interface IProps {
  item: SelectedItem;
  orderId: string;
  status: OrderStatus;
}

export const SelectedItemComponent = ({ item, orderId, status }: IProps) => {
  const selectedItem = useItemDetailsQuery(item.itemId);
  const navigate = useNavigate();
  const showCount = status !== OrderStatus.COMPLETING;

  return (
    <SimpleListItem onClick={() => navigate(`/sprzet/${item.itemId}`)}>
      <HStack w="100%" justify="space-between">
        <HStack w="100%">
          <Text fontSize="18px">{selectedItem?.name} •</Text>
          <Text textTransform="uppercase" textColor="gray.500">
            {selectedItem?.vendor}
          </Text>
        </HStack>
        {showCount && <Text minW="80px">{`Ilość: ${item.quantity}`}</Text>}
        <DeleteSelectedItemButton itemId={item.itemId} orderId={orderId} />
      </HStack>
    </SimpleListItem>
  );
};
