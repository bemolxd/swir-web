import { useIntl } from "react-intl";
import { MdFilterList } from "react-icons/md";

import { IconButton } from "components/IconButton";
import { NotificationBadge } from "components/Notifications";
import { filtersAreApplied, useQueryParams } from "components/QueryParamsV2";

import { useFilterModalHandler } from "modules/items/application";

import { FiltersModal } from "./FiltersModal/FiltersModal";

export const MoreFilters = () => {
  const onOpen = useFilterModalHandler((handler) => handler.onOpen);
  const { formatMessage } = useIntl();
  const { params } = useQueryParams();

  return (
    <>
      <div style={{ position: "relative" }}>
        <IconButton
          tooltip={formatMessage({
            id: "Items.filtering.moreFilters",
            defaultMessage: "Więcej filtrów",
          })}
          variant="ghost"
          icon={<MdFilterList />}
          onClick={onOpen}
        />
        {filtersAreApplied(params) && <NotificationBadge />}
      </div>
      <FiltersModal />
    </>
  );
};
