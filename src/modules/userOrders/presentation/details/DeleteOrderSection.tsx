import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { Button, Divider, useDisclosure } from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { useDeleteOrder } from "modules/userOrders/infrastructure";
import { OrderStatus } from "modules/userOrders/application";

import { useDeleteOrderNotifications } from "./useDeleteOrderNotifications";
import { DeleteOrderConfirmModal } from "./DeleteOrderConfirmModal";

interface IProps {
  senderId: string;
  orderId: string;
  status: OrderStatus;
}

export const DeleteOrderSection = ({ senderId, orderId, status }: IProps) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [deleteOrder, isLoading] = useDeleteOrder(senderId, orderId);
  const { showSuccessNotification, showErrorNotification } =
    useDeleteOrderNotifications();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async () => {
    try {
      await deleteOrder();
      showSuccessNotification();
      onClose();
      navigate("/sprzet", { replace: true });
    } catch (error) {
      showErrorNotification();
    }
  };

  if (status !== OrderStatus.COMPLETING && status !== OrderStatus.PENDING)
    return null;

  return (
    <>
      <Divider />
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderDetails.deleteOrderSection.header",
            defaultMessage: "Usuń zgłoszenie",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent align="flex-end">
          <Button
            variant="ghost"
            colorScheme="red"
            leftIcon={<MdDeleteForever />}
            onClick={onOpen}
          >
            {formatMessage({
              id: "UserOrderDetails.deleteOrderSection.button",
              defaultMessage: "Usuń trwale zgłoszenie",
            })}
          </Button>
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <DeleteOrderConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        isLoading={isLoading}
        onDelete={handleDelete}
      />
    </>
  );
};
