import { MdDeleteOutline } from "react-icons/md";
import { useIntl } from "react-intl";

import { IconButton } from "components/IconButton";

import { useRemoveElementNotification } from "./useRemoveElementNotification";
import { useOrderQuery, useRemoveElement } from "../infrastructure";
import { OrderStatus } from "../application";

interface IProps {
  orderId: string;
  itemId: string;
  formAction?(): void;
}

export const DeleteSelectedItemButton = ({
  orderId,
  itemId,
  formAction,
}: IProps) => {
  const { formatMessage } = useIntl();
  const { showSuccessNotification, showErrorNotification } =
    useRemoveElementNotification();
  const order = useOrderQuery(orderId);
  const [removeElement, isLoading] = useRemoveElement(orderId);

  if (order?.status !== OrderStatus.COMPLETING) {
    return null;
  }

  const handleRemove = async () => {
    try {
      await removeElement({ itemId });
      if (formAction) formAction();
      showSuccessNotification();
    } catch (error) {
      showErrorNotification();
    }
  };

  return (
    <IconButton
      colorScheme="red"
      variant="ghost"
      icon={<MdDeleteOutline />}
      tooltip={formatMessage({
        id: "UserOrderDetails.removeElementBtn",
        defaultMessage: "Usuń element z listy",
      })}
      isLoading={isLoading}
      onClick={(e) => {
        e.stopPropagation();
        handleRemove();
      }}
    />
  );
};
