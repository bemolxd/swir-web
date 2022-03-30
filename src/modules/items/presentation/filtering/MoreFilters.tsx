import { useIntl } from "react-intl";
import { MdFilterList } from "react-icons/md";
import { isEmpty, omit } from "lodash";

import { IconButton } from "components/IconButton";
import { useQueryParams } from "components/QueryParams";
import { NotificationBadge } from "components/Notifications";

import { useFilterModalHandler } from "modules/items/application";

import { FiltersModal } from "./FiltersModal/FiltersModal";

export const MoreFilters = () => {
  const onOpen = useFilterModalHandler((handler) => handler.onOpen);
  const { params } = useQueryParams();
  const { formatMessage } = useIntl();

  const areFiltersApplied = !isEmpty(omit(params, ["limit", "offset"]));

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
        {areFiltersApplied && <NotificationBadge />}
      </div>
      <FiltersModal />
    </>
  );
};
