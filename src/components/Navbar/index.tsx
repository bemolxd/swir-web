import { Heading, HStack, Spacer, useColorModeValue } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useCheckMobile } from "components/Layout";
import { Image } from "components/Image";

import { UserSection } from "./UserSection";

export const Navbar = () => {
  const isMobile = useCheckMobile();
  const { formatMessage } = useIntl();

  return (
    <HStack
      bg={useColorModeValue("white", "gray.700")}
      w="100%"
      h="60px"
      px={{ base: 4, lg: 20, xl: 40 }}
      position="fixed"
      top="0"
      boxShadow="lg"
      zIndex="10"
      justify="center"
    >
      <HStack justify="space-evenly" maxW="1500px" w="100%">
        <Image
          src="/multimed_logo.png"
          h={isMobile ? "46px" : "54px"}
          borderRadius={8}
        />
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
