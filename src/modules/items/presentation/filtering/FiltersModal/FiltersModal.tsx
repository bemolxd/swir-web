import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useFilterModalHandler } from "modules/items/application";

import { ItemTypeSection } from "./ItemTypeSection";

export const FiltersModal = () => {
  const { formatMessage } = useIntl();
  const [isOpen, onClose] = useFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onClose,
  ]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {formatMessage({
            id: "Items.filtering.filterModalTitle",
            defaultMessage: "Wyszukiwanie zaawansowane",
          })}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ItemTypeSection />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            {formatMessage({
              id: "Items.filtering.filterModalSave",
              defaultMessage: "Zapisz",
            })}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
