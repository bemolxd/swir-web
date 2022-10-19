import { useNavigate } from "react-router";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { ConfirmModal } from "components/ConfirmModal";

import { useDeleteItem } from "modules/items/infrastructure";

import { useDeleteItemNotifications } from "../notifications";

interface IProps {
  itemId: string;
}

export const DeleteButton = ({ itemId }: IProps) => {
  const { formatMessage } = useIntl();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { showSuccessNotification, showErrorNotification } =
    useDeleteItemNotifications();
  const navigate = useNavigate();
  const [deleteItem, isLoading] = useDeleteItem(itemId);

  const handleDelete = async () => {
    try {
      await deleteItem();
      showSuccessNotification();
      onClose();
      navigate("/sprzet", { replace: true });
    } catch {
      showErrorNotification();
    }
  };

  return (
    <>
      <ConfirmModal
        onClose={onClose}
        isOpen={isOpen}
        header={formatMessage({
          id: "deleteConfirmModal",
          defaultMessage: "Usuń przedmiot",
        })}
        type="critical"
        confirmButton={
          <Button
            variant="ghost"
            colorScheme="red"
            onClick={handleDelete}
            isLoading={isLoading}
          >
            {formatMessage({ id: "deleteBtn", defaultMessage: "Usuń" })}
          </Button>
        }
      >
        {formatMessage({
          id: "deleteConfirmModal.body",
          defaultMessage: "Czy na pewno chcesz usunąć wybrany przedmiot?",
        })}
      </ConfirmModal>
      <Button variant="ghost" colorScheme="red" onClick={onOpen}>
        {formatMessage({ id: "deleteBtn", defaultMessage: "Usuń" })}
      </Button>
    </>
  );
};
