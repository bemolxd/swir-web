import { SimpleList, SimpleListSkeleton } from "components/List";
import { withSuspense } from "components/RemoteData";

import { SelectedItem } from "modules/userOrders/application";
import { ListHeader } from "./ListHeader";

import { SelectedListItem } from "./SelectedItem";

interface IProps {
  items: SelectedItem[];
  orderId: string;
}

export const SelectedItemsList = withSuspense(
  ({ items, orderId }: IProps) => {
    return (
      <SimpleList>
        <ListHeader />
        {items.map((item, idx) => (
          <SelectedListItem
            key={item.itemId}
            item={item}
            orderId={orderId}
            index={idx}
          />
        ))}
      </SimpleList>
    );
  },
  { fallback: <SimpleListSkeleton /> }
);
