import { useIntl } from "react-intl";
import { HStack, VStack } from "@chakra-ui/react";

import {
  FiltersContainer,
  FiltersModal,
  MoreFiltersButton,
  SearchFilter,
  Separator,
} from "components/Filters";
import { filtersAreApplied, useQueryParams } from "components/QueryParamsV2";
import { useCheckMobile } from "components/Layout";

import { useFilterModalHandler } from "modules/adminOrders/application";
import { TechFilter } from "modules/adminOrders/presentation/filtering/TechFilter";

import { AddElementsButton } from "./AddElementsButton";

export const FilterSection = () => {
  const { formatMessage } = useIntl();
  const [isOpen, onOpen, onClose] = useFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onOpen,
    handler.onClose,
  ]);
  const { params } = useQueryParams();
  const isMobile = useCheckMobile();

  return (
    <FiltersContainer mt={2}>
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
      {isMobile ? (
        <VStack w="100%" align="flex-end">
          <AddElementsButton />
          <HStack w="100%" justify="center">
            <SearchFilter
              filterName="search"
              maxW="250px"
              placeholder={formatMessage({
                id: "UserOrders.filtering.searchboxPlaceholder",
                defaultMessage: "Szukaj",
              })}
            />
            <Separator />
            <MoreFiltersButton
              onClick={onOpen}
              areFiltersApplied={filtersAreApplied(params)}
              tooltip={formatMessage({
                id: "AdminOrders.filtersBtn",
                defaultMessage: "Filtry",
              })}
            />
          </HStack>
        </VStack>
      ) : (
        <>
          <AddElementsButton />
          <Separator />
          <SearchFilter
            filterName="search"
            maxW="250px"
            placeholder={formatMessage({
              id: "UserOrders.filtering.searchboxPlaceholder",
              defaultMessage: "Szukaj",
            })}
          />
          <Separator />
          <MoreFiltersButton
            onClick={onOpen}
            areFiltersApplied={filtersAreApplied(params)}
            tooltip={formatMessage({
              id: "AdminOrders.filtersBtn",
              defaultMessage: "Filtry",
            })}
          />
        </>
      )}
    </FiltersContainer>
  );
};
