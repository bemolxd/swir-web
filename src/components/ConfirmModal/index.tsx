import { ReactElement, ReactNode } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { MdErrorOutline, MdInfoOutline, MdWarningAmber } from "react-icons/md";
import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  isOpen: boolean;
  onClose(): void;
  header: ReactNode;
  type: ConfirmType;
  confirmButton: ReactElement;
  icon?: ReactNode;
}

type ConfirmType = "info" | "warning" | "critical";

export const ConfirmModal = ({
  isOpen,
  onClose,
  header,
  children,
  confirmButton,
  type,
  icon,
}: IProps) => {
  const { formatMessage } = useIntl();

  const infoIcon = <MdInfoOutline size="124px" />;
  const warningIcon = <MdWarningAmber size="124px" />;
  const criticalIcon = <MdErrorOutline size="124px" />;

  const getIcon = () => {
    if (type === "info") return infoIcon;
    if (type === "warning") return warningIcon;
    if (type === "critical") return criticalIcon;
  };

  const iconComponent = getIcon();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>
          <VStack spacing={4} w="100%">
            <>{icon ?? iconComponent}</>
            <>{children}</>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={2}>
            {formatMessage({
              id: "ConfirmModal.cancelBtn",
              defaultMessage: "Anuluj",
            })}
          </Button>
          {confirmButton}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
