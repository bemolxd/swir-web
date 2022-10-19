import { EmptyList } from "components/AppState";
import { Grid } from "components/Grid";

import { Item } from "modules/items/application";

import { ItemComponent } from "./ItemComponent";

interface IProps {
  items: Item[] | undefined;
}

export const ItemsGrid = ({ items }: IProps) => {
  if (!items || items.length === 0) return <EmptyList />;

  return (
    <Grid>
      {items.map((item) => (
        <ItemComponent item={item} key={item.itemId} />
      ))}
    </Grid>
  );
};
