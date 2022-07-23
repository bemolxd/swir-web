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
import { Link as RouterLink } from "react-router-dom";

export const UsefulLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AboutModal isOpen={isOpen} onClose={onClose} />
      <HStack w="100%" spacing={1} justify="center">
        <Link as={RouterLink} to="/privacy" fontSize="xs">
          Prywatność
        </Link>
        <span>•</span>
        <Link as={Text} fontSize="xs" onClick={onOpen}>
          Informacje
        </Link>
      </HStack>
    </>
  );
};

interface AboutModalProps {
  isOpen: boolean;
  onClose(): void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informacje</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <VStack spacing={0}>
              <Text>System Wypożyczeń i Rezerwacji</Text>
              <Text>&copy; {new Date().getFullYear()} Multimed</Text>
              <Text>Bartosz Bem</Text>
              <Text>
                wersja: <code>0.1.0-alpha.1</code>
              </Text>
            </VStack>
            <Text textAlign="justify">
              System stworzony w ramach pracy dyplomowej pt. "Opracowanie
              serwisu do rezerwacji i wypożyczeń sprzętu w Katedrze Systemów
              Multimedialnych". Oferuje podgląd aktualnej listy sprzętu KSM oraz
              możliwość zgłoszenia chęci jego rezerwacji, co znacząco ułatwia i
              usprawnia wewnętrzną komunikację. Więcej informacji, a także
              instrukcja dostępna jest do pobrania po kliknięciu w przycisk
              poniżej.
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            leftIcon={<MdDownload />}
            variant="outline"
            colorScheme="teal"
          >
            Pobierz instrukcję
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
