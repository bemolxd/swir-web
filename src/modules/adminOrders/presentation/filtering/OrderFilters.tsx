import { useIntl } from "react-intl";

import { filtersAreApplied, useQueryParams } from "components/QueryParamsV2";
import {
  FiltersModal,
  MoreFiltersButton,
  FiltersContainer,
  Separator,
  SearchFilter,
} from "components/Filters";

import { useFilterModalHandler } from "modules/adminOrders/application";
import { TechFilter } from "./TechFilter";

export const OrderFilters = () => {
  const [isOpen, onOpen, onClose] = useFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onOpen,
    handler.onClose,
  ]);
  const { params } = useQueryParams();
  const { formatMessage } = useIntl();

  return (
    <FiltersContainer>
      <SearchFilter
        filterName="search"
        maxW="250px"
        placeholder={formatMessage({
          id: "Orders.filtering.searchboxPlaceholder",
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
      <FiltersModal
        isOpen={isOpen}
        onClose={onClose}
        header={formatMessage({
          id: "AdminOrders.filtersModal",
          defaultMessage: "Filtruj zgłoszenia",
        })}
      >
        <TechFilter />
      </FiltersModal>
    </FiltersContainer>
  );
};
