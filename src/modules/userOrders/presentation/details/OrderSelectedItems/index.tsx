import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { OrderStatus, SelectedItem } from "modules/userOrders/application";

import { OrderSelectedItemsList } from "./OrderSelectedItemsList";
import { AddElementsButton } from "../../AddElementsButton";

interface IProps {
  items: SelectedItem[];
  status: OrderStatus;
  orderId: string;
}

export const OrderSelectedItems = ({ items, status, orderId }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderDetails.orderSelectedItems.header",
            defaultMessage: "Sprzęt",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent align="flex-end">
          <OrderSelectedItemsList
            items={items}
            orderId={orderId}
            status={status}
          />
          {status === OrderStatus.COMPLETING && <AddElementsButton />}
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
