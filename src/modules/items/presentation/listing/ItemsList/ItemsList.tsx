import { EmptyList } from "components/AppState";
import { List } from "components/List";

import { Item } from "modules/items/application";

import { ItemComponent } from "./ItemComponent";

interface IProps {
  items: Item[] | undefined;
}

export const ItemsList = ({ items }: IProps) => {
  if (!items || items.length === 0) return <EmptyList />;

  return (
    <List>
      {items.map((item) => (
        <ItemComponent key={item.itemId} item={item} />
      ))}
    </List>
  );
};
