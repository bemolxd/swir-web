import { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  AcceptOrderDto,
  useAcceptOrderModalHandler,
} from "modules/adminOrders/application";
import { useAcceptOrder } from "modules/adminOrders/infrastructure";

import { AcceptForm } from "./AcceptForm";
import { useAcceptOrderNotifications } from "./useAcceptOrderNotifications";

export const AcceptModal = () => {
  const { formatMessage } = useIntl();
  const [isOpen, store, onClose] = useAcceptOrderModalHandler((handler) => [
    handler.isOpen,
    handler.store,
    handler.onClose,
  ]);
  const [acceptOrder, isLoading] = useAcceptOrder(store?.orderId!);
  const { showSuccessNotification, showErrorNotification } =
    useAcceptOrderNotifications();

  const formId = "acceptOrderForm";

  const buttonRef = useRef();

  const handleOnSubmit = async (model: AcceptOrderDto) => {
    try {
      console.log(model);
      await acceptOrder(model);
      showSuccessNotification();
      onClose();
    } catch {
      showErrorNotification();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size="2xl"
      initialFocusRef={buttonRef as any}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {formatMessage({
            id: "AdminOrderManagement.acceptModal.header",
            defaultMessage: "Akceptuj zgłoszenie",
          })}
        </ModalHeader>
        <ModalBody>
          <AcceptForm
            orderId={store?.orderId!}
            dto={store?.dto!}
            formId={formId}
            onSubmit={(model) => {
              handleOnSubmit(model);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing={2}>
            <Button onClick={onClose}>
              {formatMessage({
                id: "AdminOrderManagement.acceptModal.cancelBtn",
                defaultMessage: "Anuluj",
              })}
            </Button>
            <Button
              type="submit"
              form={formId}
              isLoading={isLoading}
              colorScheme="teal"
              ref={buttonRef as any}
            >
              {formatMessage({
                id: "AdminOrderManagement.acceptModal.acceptBtn",
                defaultMessage: "Zatwierdź zgłoszenie",
              })}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
