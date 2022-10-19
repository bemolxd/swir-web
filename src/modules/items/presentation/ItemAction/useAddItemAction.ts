import { useMeQuery } from "components/Auth";

import { defaultParams, OrderStatus } from "modules/userOrders/application";
import {
  useUserOrdersQuery,
  useCreateOrder,
  useAddElement,
} from "modules/userOrders/infrastructure";

import { useAddElementNotifications } from "../useAddElementNotifications";

export const useAddItemAction = (itemId: string) => {
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

  return {
    addElementAction: !!completingOrder ? handleAddElement : handleCreateOrder,
    isLoading: isCreating || isAdding,
  };
};
