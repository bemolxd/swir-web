import {
  VStack,
  HStack,
  useColorModeValue,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  FiltersModal,
  MoreFiltersButton,
  SearchFilter,
  Separator,
} from "components/Filters";
import { useQueryParams, filtersAreApplied } from "components/QueryParamsV2";
import { useCheckMobile } from "components/Layout";

import { useFilterModalHandler } from "modules/adminOrders/application";
import { TechFilter } from "modules/adminOrders/presentation/filtering/TechFilter";

export const UserDetailsFiltersSection = () => {
  const { formatMessage } = useIntl();
  const [isOpen, onOpen, onClose] = useFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onOpen,
    handler.onClose,
  ]);
  const { params } = useQueryParams();
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%" align="flex-start" spacing={0}>
      <HStack w="100%" justify="space-between" px={2}>
        <Text textColor={useColorModeValue("gray.600", "gray.400")} w="100%">
          {formatMessage({
            id: "UserDetails.userOrders.header",
            defaultMessage: "Zgłoszenia użytkownika",
          })}
        </Text>
        <FiltersModal
          isOpen={isOpen}
          onClose={onClose}
          header={formatMessage({
            id: "Users.filtersModal",
            defaultMessage: "Filtruj zgłoszenia",
          })}
        >
          <TechFilter />
        </FiltersModal>
        <HStack justify="flex-end">
          <SearchFilter
            filterName="search"
            maxW={isMobile ? "190px" : "250px"}
            variant="flushed"
            borderBottom="none"
          />
          <Separator />
          <MoreFiltersButton
            onClick={onOpen}
            areFiltersApplied={filtersAreApplied(params)}
            tooltip={formatMessage({
              id: "UserDetails.userOrders.filters",
              defaultMessage: "Filtry",
            })}
          />
        </HStack>
      </HStack>
      <Divider color={useColorModeValue("gray.600", "gray.400")} />
    </VStack>
  );
};
