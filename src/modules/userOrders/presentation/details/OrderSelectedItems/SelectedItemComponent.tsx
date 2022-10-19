import { useNavigate } from "react-router-dom";
import { HStack, Tag, Text, VStack } from "@chakra-ui/react";

import { SimpleListItem } from "components/List";
import { useCheckMobile } from "components/Layout";
import { withErrorBoundary } from "components/ErrorBoundary";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import { OrderStatus, SelectedItem } from "modules/userOrders/application";

import { DeleteSelectedItemButton } from "../../DeleteSelectedItemButton";

interface IProps {
  item: SelectedItem;
  orderId: string;
  status: OrderStatus;
}

export const SelectedItemComponent = withErrorBoundary(
  ({ item, orderId, status }: IProps) => {
    const isMobile = useCheckMobile();
    const selectedItem = useItemDetailsQuery(item.itemId);
    const navigate = useNavigate();
    const showCount = status !== OrderStatus.COMPLETING;

    return (
      <SimpleListItem onClick={() => navigate(`/sprzet/${item.itemId}`)}>
        <HStack w="100%" justify="space-between">
          {isMobile ? (
            <VStack w="100%" align="flex-start">
              <Text fontSize="18px">{selectedItem?.name}</Text>
              <Text textTransform="uppercase" textColor="gray.500">
                {selectedItem?.vendor}
              </Text>
            </VStack>
          ) : (
            <HStack w="100%">
              <Text fontSize="18px">{selectedItem?.name} •</Text>
              <Text textTransform="uppercase" textColor="gray.500">
                {selectedItem?.vendor}
              </Text>
            </HStack>
          )}
          {showCount && (
            <Tag minW="36px" justifyContent="center">
              {item.quantity}
            </Tag>
          )}
          <DeleteSelectedItemButton itemId={item.itemId} orderId={orderId} />
        </HStack>
      </SimpleListItem>
    );
  },
  { fallback: <div /> }
);
