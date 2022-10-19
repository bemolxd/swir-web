import { ButtonGroup } from "@chakra-ui/react";
import { MdViewList, MdViewModule } from "react-icons/md";
import { useIntl } from "react-intl";
import { useEffect } from "react";
import { useLocalStorage } from "utils";

import { IconButton } from "components/IconButton";
import { Separator } from "components/Filters";
import { useCheckMobile } from "components/Layout";

import { useItemsViewHandler } from "modules/items/application";

export const DisplayTypeButtons = () => {
  const { formatMessage } = useIntl();
  const setView = useItemsViewHandler((handler) => handler.setView);
  const [value, setValue] = useLocalStorage("grid-layout", false);
  const isMobile = useCheckMobile();

  useEffect(() => {
    if (!value) {
      setView("list");
      return;
    }

    setView("grid");
  }, [value, setView]);

  if (isMobile) return null;

  return (
    <>
      <ButtonGroup spacing={0}>
        <IconButton
          tooltip={formatMessage({
            id: "Items.filtering.listView",
            defaultMessage: "Widok listy",
          })}
          icon={<MdViewList />}
          variant="ghost"
          onClick={() => {
            setView("list");
            setValue(false);
          }}
        />
        <IconButton
          tooltip={formatMessage({
            id: "Items.filtering.gridView",
            defaultMessage: "Widok kafelków",
          })}
          icon={<MdViewModule />}
          variant="ghost"
          onClick={() => {
            setView("grid");
            setValue(true);
          }}
        />
      </ButtonGroup>
      <Separator />
    </>
  );
};
