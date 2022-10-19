import { HStack, Badge } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export const ListHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <HStack px={2} mt={1} justify="space-between" w="100%">
      <Badge size="sm" colorScheme="gray" variant="outline">
        {formatMessage({
          id: "OrderSelectedItemsList.listHeader.itemsLabel",
          defaultMessage: "Nazwa i Producent",
        })}
      </Badge>
      <HStack>
        <Badge size="sm" colorScheme="gray" variant="outline">
          {formatMessage({
            id: "OrderSelectedItemsList.listHeader.quantityLabel",
            defaultMessage: "Ilość",
          })}
        </Badge>
        <Badge size="sm" colorScheme="gray" variant="outline">
          {formatMessage({
            id: "OrderSelectedItemsList.listHeader.actionsLabel",
            defaultMessage: "Akcje",
          })}
        </Badge>
      </HStack>
    </HStack>
  );
};
