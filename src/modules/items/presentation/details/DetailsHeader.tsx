import { Heading, Divider, HStack, Button } from "@chakra-ui/react";
import { ContextType } from "types";
import { MdEdit } from "react-icons/md";

import { useGetContextType } from "components/Auth";

interface IProps {
  itemName: string;
  itemId: string;
}

export const DetailsHeader = ({ itemName, itemId }: IProps) => {
  const contextType = useGetContextType();
  const isAdmin = contextType !== ContextType.USER;

  return (
    <>
      <HStack w="100%" justify="space-between">
        <Heading size="lg" fontWeight="600">
          {itemName}
        </Heading>
        {isAdmin && (
          <Button variant="outline" fontWeight="400" leftIcon={<MdEdit />}>
            Edytuj informacje
          </Button>
        )}
      </HStack>
      <Divider />
    </>
  );
};
