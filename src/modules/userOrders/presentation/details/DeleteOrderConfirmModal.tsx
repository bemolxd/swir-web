import { useIntl } from "react-intl";
import { Button, Text } from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";

import { ConfirmModal } from "components/ConfirmModal";

interface IProps {
  isOpen: boolean;
  onClose(): void;
  onDelete(): void;
  isLoading: boolean;
}

export const DeleteOrderConfirmModal = ({
  isOpen,
  onClose,
  onDelete,
  isLoading,
}: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      type="critical"
      header={formatMessage({
        id: "DeleteOrderConfirmModal.header",
        defaultMessage: "Usuń trwale zgłoszenie",
      })}
      confirmButton={
        <Button
          variant="ghost"
          colorScheme="red"
          leftIcon={<MdDeleteForever />}
          onClick={onDelete}
          isLoading={isLoading}
        >
          {formatMessage({
            id: "DeleteOrderConfirmModal.button",
            defaultMessage: "Usuń trwale zgłoszenie",
          })}
        </Button>
      }
    >
      <Text align="center">
        {formatMessage({
          id: "DeleteOrderConfirmModal.body",
          defaultMessage:
            "Czy na pewno chcesz trwale usunąć zgłoszenie? Od tej akcji nie ma odwrotu.",
        })}
      </Text>
    </ConfirmModal>
  );
};
