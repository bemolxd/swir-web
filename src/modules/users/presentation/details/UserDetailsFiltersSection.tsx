import {
  VStack,
  HStack,
  useColorModeValue,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { MoreFiltersButton } from "components/Filters";

export const UserDetailsFiltersSection = () => {
  const { formatMessage } = useIntl();

  return (
    <VStack w="100%" align="flex-start" spacing={0}>
      <HStack w="100%" justify="space-between" px={2}>
        <Text textColor={useColorModeValue("gray.600", "gray.400")}>
          {formatMessage({
            id: "UserDetails.userOrders.header",
            defaultMessage: "Zgłoszenia użytkownika",
          })}
        </Text>
        <MoreFiltersButton
          onClick={() => {}}
          areFiltersApplied={true}
          tooltip={formatMessage({
            id: "UserDetails.userOrders.filters",
            defaultMessage: "Filtry",
          })}
        />
      </HStack>
      <Divider color={useColorModeValue("gray.600", "gray.400")} />
    </VStack>
  );
};
