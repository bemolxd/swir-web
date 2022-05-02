import { Button, useDisclosure, Text, Textarea } from "@chakra-ui/react";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import { ConfirmModal } from "components/ConfirmModal";

import { useRejectOrder } from "modules/adminOrders/infrastructure";
import { RejectOrderDto } from "modules/adminOrders/application";

import { useRejectOrderNotifications } from "./useRejectOrderNotifications";

interface IProps {
  orderId: string;
}

export const RejectButton = ({ orderId }: IProps) => {
  const { formatMessage } = useIntl();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [rejectOrder, isLoading] = useRejectOrder(orderId);

  const { showSuccessNotification, showErrorNotification } =
    useRejectOrderNotifications();
  const { register, handleSubmit } = useForm<RejectOrderDto>();

  const handleRejectOrder = async (model: RejectOrderDto) => {
    try {
      await rejectOrder(model);
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
        colorScheme="red"
        leftIcon={<MdOutlineCancel />}
        onClick={onOpen}
      >
        {formatMessage({
          id: "AdminOrderManagement.rejectBtn",
          defaultMessage: "Odrzuć zgłoszenie",
        })}
      </Button>
      <form>
        <ConfirmModal
          isOpen={isOpen}
          onClose={onClose}
          header={formatMessage({
            id: "AdminOrderManagement.confirmHeader",
            defaultMessage: "Odrzuć zgłoszenie",
          })}
          type="critical"
          confirmButton={
            <Button
              colorScheme="red"
              onClick={handleSubmit(handleRejectOrder)}
              isLoading={isLoading}
            >
              {formatMessage({
                id: "AdminOrderManagement.confirmRejectBtn",
                defaultMessage: "Odrzuć zgłoszenie",
              })}
            </Button>
          }
        >
          <Text>
            {formatMessage({
              id: "AdminOrderManagement.confirmDescription",
              defaultMessage:
                "Rozpoczynasz proces odrzucenia zgłoszenia. Poniżej zamieść uzasadnienie oraz dodatkowe uwagi dla osoby zgłaszającej.",
            })}
          </Text>
          <Textarea
            {...register("techComment", { required: true })}
            resize="none"
            placeholder={formatMessage({
              id: "AdminOrderManagement.justificationPlaceholder",
              defaultMessage: "Uzasadnienie",
            })}
          />
        </ConfirmModal>
      </form>
    </>
  );
};
