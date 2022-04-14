import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { ClearFiltersButton } from "components/Filters";

import { useFilterModalHandler } from "modules/items/application";

import { ItemTypeSection } from "./ItemTypeSection";
import { ItemCategorySection } from "./ItemCategorySection";

export const FiltersModal = () => {
  const { formatMessage } = useIntl();
  const [isOpen, onClose] = useFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onClose,
  ]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
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
          <ItemCategorySection />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <ClearFiltersButton />
            <Button colorScheme="teal" onClick={onClose}>
              {formatMessage({
                id: "Items.filtering.filterModalClose",
                defaultMessage: "Zamknij",
              })}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
