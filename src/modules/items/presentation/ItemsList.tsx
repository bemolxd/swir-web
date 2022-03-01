import { useNavigate } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemSubtitle,
  ListItemTitle,
} from "components/List";

import { Item } from "../application";

interface IProps {
  items: Item[] | undefined;
}

export const ItemsList = ({ items }: IProps) => {
  if (!items) return <div>no items</div>;

  return (
    <List>
      {items.map((item) => (
        <ItemComponent key={item.itemId} item={item} />
      ))}
    </List>
  );
};

const ItemComponent = ({ item }: { item: Item }) => {
  const navigate = useNavigate();

  return (
    <ListItem onClick={() => navigate(item.itemId)}>
      <ListItemTitle>{item.name}</ListItemTitle>
      <ListItemSubtitle>{item.vendor}</ListItemSubtitle>
    </ListItem>
  );
};
