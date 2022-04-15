import { useQueryParams, filtersAreApplied } from "components/QueryParamsV2";

import { useUserFilterModalHandler } from "modules/users/application";
import { FiltersModal, MoreFiltersButton } from "components/Filters";

export const MoreFilters = () => {
  const [isOpen, onOpen, onClose] = useUserFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onOpen,
    handler.onClose,
  ]);
  const { params } = useQueryParams();

  return (
    <>
      <MoreFiltersButton
        onClick={onOpen}
        areFiltersApplied={filtersAreApplied(params)}
      />
      <FiltersModal isOpen={isOpen} onClose={onClose}>
        {}
      </FiltersModal>
    </>
  );
};
