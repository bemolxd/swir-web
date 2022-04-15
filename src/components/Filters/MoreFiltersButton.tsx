import { useIntl } from "react-intl";
import { MdFilterList } from "react-icons/md";

import { IconButton } from "components/IconButton";
import { NotificationBadge } from "components/Notifications";

interface IProps {
  onClick(): void;
  areFiltersApplied: boolean;
  tooltip?: string;
}

export const MoreFiltersButton = ({
  onClick,
  areFiltersApplied,
  tooltip,
}: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        tooltip={
          tooltip ??
          formatMessage({
            id: "Filters.moreFilters",
            defaultMessage: "Więcej filtrów",
          })
        }
        variant="ghost"
        icon={<MdFilterList />}
        onClick={onClick}
      />
      {areFiltersApplied && <NotificationBadge />}
    </div>
  );
};
