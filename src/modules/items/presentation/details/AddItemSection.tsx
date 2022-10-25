import { Divider, VStack } from "@chakra-ui/react";

import { useGetContextType } from "components/Auth";

import { AddElementButton } from "../ItemAction";

interface IProps {
  itemId: string;
}

export const AddItemSection = ({ itemId }: IProps) => {
  const { isUser } = useGetContextType();

  if (!isUser) return null;

  return (
    <VStack w="100%" align="flex-end" pt={2}>
      <Divider />
      <AddElementButton itemId={itemId} variant="outline" colorScheme="teal" />
    </VStack>
  );
};
