import { Button, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { MdDoneAll } from "react-icons/md";
import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";

import { useFinishOrder } from "modules/adminOrders/infrastructure";
import { FinishOrderDto } from "modules/adminOrders/application";

import { useFinishOrderNotifications } from "./useFinishOrderNotifications";
import { ConfirmModal } from "components/ConfirmModal";

interface IProps {
  orderId: string;
}

export const FinishButton = ({ orderId }: IProps) => {
  const { formatMessage } = useIntl();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [finishOrder, isLoading] = useFinishOrder(orderId);

  const { showSuccessNotification, showErrorNotification } =
    useFinishOrderNotifications();
  const { register, handleSubmit } = useForm<FinishOrderDto>();

  const handleFinishOrder = async (model: FinishOrderDto) => {
    try {
      await finishOrder(model);
      showSuccessNotification();
      onClose();
    } catch {
      showErrorNotification();
    }
  };

  return (
    <>
      <Button
        variant="outline"
        colorScheme="orange"
        leftIcon={<MdDoneAll />}
        onClick={onOpen}
      >
        {formatMessage({
          id: "AdminOrderManagement.finishBtn",
          defaultMessage: "Zakończ zgłoszenie",
        })}
      </Button>
      <form>
        <ConfirmModal
          isOpen={isOpen}
          onClose={onClose}
          header={formatMessage({
            id: "AdminOrderManagement.confirmHeader",
            defaultMessage: "Zakończ zgłoszenie",
          })}
          type="warning"
          confirmButton={
            <Button
              colorScheme="orange"
              onClick={handleSubmit(handleFinishOrder)}
              isLoading={isLoading}
            >
              {formatMessage({
                id: "AdminOrderManagement.confirmFinishBtn",
                defaultMessage: "Zakończ zgłoszenie",
              })}
            </Button>
          }
        >
          <Text>
            {formatMessage({
              id: "AdminOrderManagement.confirmDescription",
              defaultMessage:
                "Rozpoczynasz proces zakończenia zgłoszenia. Poniżej możesz zamieścić uzasadnienie oraz dodatkowe uwagi dla osoby zgłaszającej.",
            })}
          </Text>
          <Textarea
            {...register("techComment")}
            resize="none"
            placeholder={formatMessage({
              id: "AdminOrderManagement.commentPlaceholder",
              defaultMessage: "Komentarz",
            })}
          />
        </ConfirmModal>
      </form>
    </>
  );
};
