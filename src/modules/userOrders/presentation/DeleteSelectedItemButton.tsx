import { MdDeleteOutline } from "react-icons/md";
import { useIntl } from "react-intl";

import { IconButton } from "components/IconButton";

import { useRemoveElementNotification } from "./useRemoveElementNotification";
import { useRemoveElement } from "../infrastructure";

interface IProps {
  orderId: string;
  itemId: string;
}

export const DeleteSelectedItemButton = ({ orderId, itemId }: IProps) => {
  const { formatMessage } = useIntl();
  const { showSuccessNotification, showErrorNotification } =
    useRemoveElementNotification();

  const [removeElement, isLoading] = useRemoveElement(orderId);

  const handleRemove = async () => {
    try {
      await removeElement({ itemId });
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
