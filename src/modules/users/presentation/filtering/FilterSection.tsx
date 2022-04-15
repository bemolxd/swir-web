import { FiltersContainer, Separator } from "components/Filters";

import { MoreFilters } from "./MoreFilters";

export const FilterSection = () => {
  return (
    <FiltersContainer mt={2}>
      <Separator />
      <MoreFilters />
    </FiltersContainer>
  );
};
