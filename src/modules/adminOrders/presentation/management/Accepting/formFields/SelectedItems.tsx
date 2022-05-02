import { useIntl } from "react-intl";
import { FormLabel, VStack } from "@chakra-ui/react";

import { AcceptOrderDto } from "modules/adminOrders/application";
import { SelectedItemsList } from "modules/userOrders/presentation/summary/SelectedItems/SelectedItemsList";

interface IProps {
  dto: AcceptOrderDto;
  orderId: string;
}

export const SelectedItems = ({ dto, orderId }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <VStack w="100%" spacing={0} align="flex-start">
      <FormLabel>
        {formatMessage({
          id: "AdminOrderManagement.acceptModal.items",
          defaultMessage: "Sprzęt:",
        })}
      </FormLabel>
      <SelectedItemsList items={dto.items} orderId={orderId} />
    </VStack>
  );
};
