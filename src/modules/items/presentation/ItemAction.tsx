import { HStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { MdAddTask } from "react-icons/md";

import { IconButton } from "components/IconButton";
import { useMeQuery } from "components/Auth";

import {
  useAddElement,
  useCreateOrder,
  useUserOrdersQuery,
} from "modules/userOrders/infrastructure";
import { defaultParams, OrderStatus } from "modules/userOrders/application";

import { useAddElementNotifications } from "./useAddElementNotifications";

export const ItemAction = ({ itemId }: { itemId: string }) => {
  const { formatMessage } = useIntl();

  const me = useMeQuery();
  const orders = useUserOrdersQuery(me?.userId!, defaultParams);
  const completingOrder = orders?.collection.find(
    (order) => order.status === OrderStatus.COMPLETING
  );

  const [createOrder, isCreating] = useCreateOrder(me?.userId!);
  const [addElement, isAdding] = useAddElement(completingOrder?.orderId!);

  const {
    showSuccessNotification,
    showErrorNotification,
    showAlreadyExistsNotification,
  } = useAddElementNotifications();

  const handleAddElement = async () => {
    try {
      if (completingOrder?.items.find((item) => item.itemId === itemId)) {
        return showAlreadyExistsNotification();
      }
      await addElement({ item: { itemId, quantity: 1 } });
      showSuccessNotification();
    } catch (error) {
      showErrorNotification();
    }
  };

  const handleCreateOrder = async () => {
    try {
      await createOrder({
        senderId: me?.userId!,
        items: [
          {
            itemId,
            quantity: 1,
          },
        ],
      });
      showSuccessNotification();
    } catch (error) {
      showErrorNotification();
    }
  };

  return (
    <HStack w="100%" justify="flex-end">
      <IconButton
        tooltip={formatMessage({
          id: "ItemAction.addToOrder",
          defaultMessage: "Dodaj element do zgłoszenia",
        })}
        icon={<MdAddTask />}
        isLoading={isCreating || isAdding}
        onClick={async (e) => {
          e.stopPropagation();

          if (!!completingOrder) {
            return handleAddElement();
          }

          handleCreateOrder();
        }}
      />
    </HStack>
  );
};
