import { HStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { MdAddTask } from "react-icons/md";

import { IconButton } from "components/IconButton";

export const ItemAction = ({ itemId }: { itemId: string }) => {
  const { formatMessage } = useIntl();

  return (
    <HStack w="100%" justify="flex-end">
      <IconButton
        tooltip={formatMessage({
          id: "ItemAction.addToOrder",
          defaultMessage: "Dodaj element do zgłoszenia",
        })}
        icon={<MdAddTask />}
        onClick={(e) => e.stopPropagation()}
      />
    </HStack>
  );
};
