import { HStack, Badge } from "@chakra-ui/react";
import { useIntl } from "react-intl";

interface IProps {
  isSummary?: boolean;
}

export const ListHeader = ({ isSummary }: IProps) => {
  const { formatMessage } = useIntl();

  const secondColumnLabel = isSummary
    ? formatMessage({
        id: "OrderSelectedItemsList.listHeader.quantityLabel",
        defaultMessage: "Ilość",
      })
    : formatMessage({
        id: "OrderSelectedItemsList.listHeader.actionsLabel",
        defaultMessage: "Akcje",
      });

  return (
    <HStack px={2} mt={1} justify="space-between" w="100%">
      <Badge size="sm" colorScheme="gray" variant="outline">
        {formatMessage({
          id: "OrderSelectedItemsList.listHeader.itemsLabel",
          defaultMessage: "Nazwa i Producent",
        })}
      </Badge>
      <Badge size="sm" colorScheme="gray" variant="outline">
        {secondColumnLabel}
      </Badge>
    </HStack>
  );
};
