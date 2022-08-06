import { HStack } from "@chakra-ui/react";

import { useGetContextType } from "components/Auth";

import { AddElementAction } from "./AddElementAction";
import { EditItemAction } from "./EditItemAction";

export const ItemAction = ({ itemId }: { itemId: string }) => {
  const { isGlobal, isTech } = useGetContextType();
  const isAdmin = isGlobal || isTech;

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
