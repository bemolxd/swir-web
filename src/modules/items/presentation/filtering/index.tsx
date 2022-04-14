import { useIntl } from "react-intl";

import { Separator, SearchFilter, FiltersContainer } from "components/Filters";

import { DisplayTypeButtons } from "./DisplayTypeButtons";
import { MoreFilters } from "./MoreFilters";

export const FilterSection = () => {
  const { formatMessage } = useIntl();

  return (
    <FiltersContainer mt={2}>
      <DisplayTypeButtons />
      <SearchFilter
        filterName="search"
        maxW="250px"
        placeholder={formatMessage({
          id: "Items.filtering.searchboxPlaceholder",
          defaultMessage: "Szukaj",
        })}
      />
      <Separator />
      <MoreFilters />
    </FiltersContainer>
  );
};
