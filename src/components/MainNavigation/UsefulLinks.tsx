import {
  HStack,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Button,
} from "@chakra-ui/react";
import { MdDownload } from "react-icons/md";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";

import { useGetContextType } from "components/Auth";

export const UsefulLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { formatMessage } = useIntl();

  return (
    <>
      <AboutModal isOpen={isOpen} onClose={onClose} />
      <HStack w="100%" spacing={1} justify="center">
        <Link as={RouterLink} to="/privacy" fontSize="xs">
          {formatMessage({
            id: "UsefulLinks.privacyLabel",
            defaultMessage: "Prywatność",
          })}
        </Link>
        <span>•</span>
        <Link as={Text} fontSize="xs" onClick={onOpen}>
          {formatMessage({
            id: "UsefulLinks.infoLabel",
            defaultMessage: "Informacje",
          })}
        </Link>
      </HStack>
    </>
  );
};

interface AboutModalProps {
  isOpen: boolean;
  onClose(): void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const { formatMessage } = useIntl();
  const { isUser } = useGetContextType();

  const manualLink = isUser
    ? process.env.REACT_APP_MANUAL_LINK_USER
    : process.env.REACT_APP_MANUAL_LINK_ADMIN;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {formatMessage({
            id: "AboutModal.header",
            defaultMessage: "Informacje",
          })}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <VStack spacing={0}>
              <Text>System Wypożyczeń i Rezerwacji</Text>
              <span>
                &copy; {new Date().getFullYear()}{" "}
                <Link href="https://multimed.org" target="_blank">
                  Multimed
                </Link>
              </span>
              <span>
                Bartosz Bem{" ("}
                <Link href="https://github.com/bemolxd" target="_blank">
                  bemolx
                </Link>
                {")"}
              </span>
              <Text>
                {formatMessage(
                  {
                    id: "AboutModal.version",
                    defaultMessage: "wersja: {version}",
                  },
                  { version: <code>0.1.4-3110.22</code> }
                )}
              </Text>
            </VStack>
            <Text textAlign="justify">
              {formatMessage({
                id: "AboutModal.body",
                defaultMessage: `System stworzony w ramach pracy dyplomowej pt. "Opracowanie
              serwisu do rezerwacji i wypożyczeń sprzętu w Katedrze Systemów
              Multimedialnych". Oferuje podgląd aktualnej listy sprzętu KSM oraz
              możliwość zgłoszenia chęci jego rezerwacji, co znacząco ułatwia i
              usprawnia wewnętrzną komunikację. Więcej informacji, a także
              instrukcja dostępna jest do pobrania po kliknięciu w przycisk
              poniżej.`,
              })}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            leftIcon={<MdDownload />}
            variant="outline"
            colorScheme="teal"
            as="a"
            href={manualLink}
            target="_blank"
          >
            {formatMessage({
              id: "AboutModal.downloadBtn",
              defaultMessage: "Pobierz instrukcję",
            })}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
