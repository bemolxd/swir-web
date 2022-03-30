import { ButtonGroup } from "@chakra-ui/react";
import { MdViewList, MdViewModule } from "react-icons/md";
import { useIntl } from "react-intl";

import { IconButton } from "components/IconButton";

import { useItemsViewHandler } from "modules/items/application";

export const DisplayTypeButtons = () => {
  const { formatMessage } = useIntl();
  const setView = useItemsViewHandler((handler) => handler.setView);

  return (
    <ButtonGroup spacing={0}>
      <IconButton
        tooltip={formatMessage({
          id: "Items.filtering.listView",
          defaultMessage: "Widok listy",
        })}
        icon={<MdViewList />}
        variant="ghost"
        onClick={() => setView("list")}
      />
      <IconButton
        tooltip={formatMessage({
          id: "Items.filtering.gridView",
          defaultMessage: "Widok kafelków",
        })}
        icon={<MdViewModule />}
        variant="ghost"
        onClick={() => setView("grid")}
      />
    </ButtonGroup>
  );
};
