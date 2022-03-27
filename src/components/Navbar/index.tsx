import {
  Heading,
  HStack,
  Image,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useCheckMobile } from "components/Layout";

import { UserSection } from "./UserSection";

export const Navbar = () => {
  const isMobile = useCheckMobile();
  const { formatMessage } = useIntl();

  return (
    <HStack
      bg={useColorModeValue("white", "gray.700")}
      w="100%"
      h="60px"
      px={isMobile ? 4 : 40}
      position="fixed"
      top="0"
      boxShadow="lg"
      zIndex="10"
      justify="center"
    >
      <HStack justify="space-evenly" maxW="1500px" w="100%">
        <Image src="/multimed_logo.png" h="54px" />
        <Heading size="lg" fontWeight="400">
          {isMobile
            ? "SWiR"
            : formatMessage({
                id: "Navbar.appTitle",
                defaultMessage: "System Wypożyczeń i Rezerwacji",
              })}
        </Heading>
        <Spacer />
        <UserSection />
      </HStack>
    </HStack>
  );
};
