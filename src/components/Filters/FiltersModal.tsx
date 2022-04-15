import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useIntl } from "react-intl";

import { IChildrenProp } from "types";

import { ClearFiltersButton } from "./ClearFiltersButton";

interface IProps extends IChildrenProp {
  isOpen: boolean;
  onClose(): void;
  header: ReactNode;
}

export const FiltersModal = ({ isOpen, onClose, header, children }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <ClearFiltersButton />
            <Button colorScheme="teal" onClick={onClose}>
              {formatMessage({
                id: "Filters.filterModalClose",
                defaultMessage: "Zamknij",
              })}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
