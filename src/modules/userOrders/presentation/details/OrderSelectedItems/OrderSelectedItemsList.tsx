import { SimpleList, SimpleListSkeleton } from "components/List";
import { withSuspense } from "components/RemoteData";

import { OrderStatus, SelectedItem } from "modules/userOrders/application";

import { SelectedItemComponent } from "./SelectedItemComponent";

interface IProps {
  items: SelectedItem[];
  orderId: string;
  status: OrderStatus;
}

export const OrderSelectedItemsList = withSuspense(
  ({ items, orderId, status }: IProps) => {
    if (items.length === 0) return null;

    return (
      <SimpleList>
        {items.map((item) => (
          <SelectedItemComponent
            key={item.itemId}
            item={item}
            orderId={orderId}
            status={status}
          />
        ))}
      </SimpleList>
    );
  },
  { fallback: <SimpleListSkeleton /> }
);
