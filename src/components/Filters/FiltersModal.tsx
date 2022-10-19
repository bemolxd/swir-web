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

import { IChildrenProp, IQueryParams } from "types";

import { ClearFiltersButton } from "./ClearFiltersButton";

interface IProps extends IChildrenProp {
  isOpen: boolean;
  onClose(): void;
  header?: ReactNode;
  defaultParams?: {} & IQueryParams;
}

export const FiltersModal = ({
  isOpen,
  onClose,
  header,
  defaultParams,
  children,
}: IProps) => {
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
        <ModalHeader>
          {header ??
            formatMessage({
              id: "Filters.filterModalTitle",
              defaultMessage: "Wyszukiwanie zaawansowane",
            })}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <ClearFiltersButton defaultParams={defaultParams} />
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
