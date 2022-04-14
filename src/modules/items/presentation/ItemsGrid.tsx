import { useNavigate } from "react-router-dom";

import {
  Grid,
  GridItem,
  GridItemSubtitle,
  GridItemTitle,
} from "components/Grid";
import { Image } from "components/Image";
import { EmptyList } from "components/AppState";

import { Item } from "../application";
import { ItemAction } from "./ItemAction";

interface IProps {
  items: Item[] | undefined;
}

export const ItemsGrid = ({ items }: IProps) => {
  if (!items || items.length === 0) return <EmptyList />;

  return (
    <Grid>
      {items.map((item) => (
        <ItemComponent item={item} />
      ))}
    </Grid>
  );
};

const ItemComponent = ({ item }: { item: Item }) => {
  const navigate = useNavigate();

  return (
    <GridItem
      colSpan={1}
      key={item.itemId}
      onClick={() => {
        navigate(`/sprzet/${item.itemId}`);
      }}
    >
      <Image src={item.imageUrl} />
      <GridItemTitle>{item.name}</GridItemTitle>
      <GridItemSubtitle>{item.vendor}</GridItemSubtitle>
      <ItemAction itemId={item.itemId} />
    </GridItem>
  );
};
