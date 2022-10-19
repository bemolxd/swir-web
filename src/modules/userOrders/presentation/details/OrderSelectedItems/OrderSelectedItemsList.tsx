import { SimpleList, SimpleListSkeleton } from "components/List";
import { withSuspense } from "components/RemoteData";

import { OrderStatus, SelectedItem } from "modules/userOrders/application";

import { SelectedItemComponent } from "./SelectedItemComponent";
import { ListHeader } from "./ListHeader";

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
        <ListHeader isSummary={status !== OrderStatus.COMPLETING} />
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
