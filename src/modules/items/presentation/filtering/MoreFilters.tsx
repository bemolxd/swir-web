import { useIntl } from "react-intl";
import { filtersAreApplied, useQueryParams } from "components/QueryParamsV2";
import { MoreFiltersButton, FiltersModal } from "components/Filters";

import {
  DEFAULT_PARAMS,
  useFilterModalHandler,
} from "modules/items/application";

import { ItemCategorySection, ItemTypeSection } from "./FiltersModal";

export const MoreFilters = () => {
  const [onOpen, isOpen, onClose] = useFilterModalHandler((handler) => [
    handler.onOpen,
    handler.isOpen,
    handler.onClose,
  ]);
  const { formatMessage } = useIntl();
  const { params } = useQueryParams();

  return (
    <>
      <MoreFiltersButton
        onClick={onOpen}
        areFiltersApplied={filtersAreApplied(params)}
      />
      <FiltersModal
        isOpen={isOpen}
        onClose={onClose}
        header={formatMessage({
          id: "Items.filtering.filterModalTitle",
          defaultMessage: "Wyszukiwanie zaawansowane",
        })}
        defaultParams={DEFAULT_PARAMS}
      >
        <ItemTypeSection />
        <ItemCategorySection />
      </FiltersModal>
    </>
  );
};
