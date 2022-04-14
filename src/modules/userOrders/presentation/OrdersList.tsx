import { EmptyList } from "components/AppState";
import { List } from "components/List";

import { Order } from "../application";
import { OrderComponent } from "./OrderComponent";

interface IProps {
  orders: Order[];
}

export const OrdersList = ({ orders }: IProps) => {
  if (!orders || orders.length === 0) return <EmptyList />;

  return (
    <List>
      {orders.map((order) => (
        <OrderComponent key={order.orderId} order={order} />
      ))}
    </List>
  );
};
