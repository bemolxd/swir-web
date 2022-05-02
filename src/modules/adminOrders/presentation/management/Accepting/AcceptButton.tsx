import { Button } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import { useIntl } from "react-intl";

import { Order } from "modules/userOrders/application";
import { useAcceptOrderModalHandler } from "modules/adminOrders/application";

import { AcceptModal } from "./AcceptModal";

interface IProps {
  order: Order;
}

export const AcceptButton = ({ order }: IProps) => {
  const { formatMessage } = useIntl();
  const onOpen = useAcceptOrderModalHandler((handler) => handler.onOpen);

  return (
    <>
      <Button
        variant="outline"
        colorScheme="teal"
        leftIcon={<MdSend />}
        onClick={() => {
          onOpen({
            orderId: order.orderId,
            dto: {
              techId: order.techId!,
              dateFrom: order.dateFrom!,
              dateTo: order.dateTo!,
              items: order.items!,
              techComment: null,
            },
          });
        }}
      >
        {formatMessage({
          id: "AdminOrderManagement.acceptBtn",
          defaultMessage: "Akceptuj zgłoszenie",
        })}
      </Button>
      <AcceptModal />
    </>
  );
};
