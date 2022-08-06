import { useIntl } from "react-intl";

import { filtersAreApplied, useQueryParams } from "components/QueryParamsV2";
import {
  FiltersModal,
  MoreFiltersButton,
  FiltersContainer,
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
          id: "Users.filtersModal",
          defaultMessage: "Filtruj zgłoszenia",
        })}
      >
        <TechFilter />
      </FiltersModal>
    </FiltersContainer>
  );
};
