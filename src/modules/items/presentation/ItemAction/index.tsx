import { HStack } from "@chakra-ui/react";
import { ContextType } from "types";

import { useGetContextType } from "components/Auth";

import { AddElementAction } from "./AddElementAction";
import { EditItemAction } from "./EditItemAction";

export const ItemAction = ({ itemId }: { itemId: string }) => {
  const contextType = useGetContextType();
  const isAdmin = contextType !== ContextType.USER;

  return (
    <HStack w="100%" justify="flex-end">
      {isAdmin ? (
        <EditItemAction itemId={itemId} />
      ) : (
        <AddElementAction itemId={itemId} />
      )}
    </HStack>
  );
};
