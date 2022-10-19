import { HStack, VStack } from "@chakra-ui/react";

import { useCheckMobile } from "components/Layout";

import { DeleteButton } from "./DeleteButton";
import { SaveButton } from "./SaveButton";

interface IProps {
  itemId: string;
  isEditing?: boolean;
}

export const SummarySection = ({ itemId, isEditing = false }: IProps) => {
  const isMobile = useCheckMobile();

  if (isMobile) {
    return (
      <VStack w="100%">
        <SaveButton itemId={itemId} />
        <DeleteButton itemId={itemId} />
      </VStack>
    );
  }

  return (
    <HStack w="100%" justify="flex-end">
      <DeleteButton itemId={itemId} />
      <SaveButton itemId={itemId} />
    </HStack>
  );
};
