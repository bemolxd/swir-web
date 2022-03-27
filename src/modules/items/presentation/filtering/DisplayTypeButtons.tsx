import { ButtonGroup } from "@chakra-ui/react";
import { MdViewList, MdViewModule } from "react-icons/md";
import { useIntl } from "react-intl";

import { IconButton } from "components/IconButton";

export const DisplayTypeButtons = () => {
  const { formatMessage } = useIntl();

  return (
    <ButtonGroup spacing={0}>
      <IconButton
        tooltip={formatMessage({
          id: "Items.filtering.listView",
          defaultMessage: "Widok listy",
        })}
        icon={<MdViewList />}
        variant="ghost"
      />
      <IconButton
        tooltip={formatMessage({
          id: "Items.filtering.gridView",
          defaultMessage: "Widok kafelków",
        })}
        icon={<MdViewModule />}
        variant="ghost"
      />
    </ButtonGroup>
  );
};
