import { useNavigate } from "react-router";

import { GridItem, GridItemSubtitle, GridItemTitle } from "components/Grid";
import { Image } from "components/Image";

import { Item } from "modules/items/application";

import { ItemAction } from "../../ItemAction";
import { AvailabilityTag } from "../../itemAvailability";

interface IProps {
  item: Item;
}

export const ItemComponent = ({ item }: IProps) => {
  const navigate = useNavigate();

  return (
    <GridItem
      colSpan={1}
      key={item.itemId}
      onClick={() => {
        navigate(`/sprzet/${item.itemId}`);
      }}
    >
      <Image src={item.imageUrl} w="200px" h="200px" borderRadius={8} />
      <GridItemTitle>{item.name}</GridItemTitle>
      <GridItemSubtitle>{item.vendor}</GridItemSubtitle>
      <AvailabilityTag itemId={item.itemId} />
      <ItemAction itemId={item.itemId} />
    </GridItem>
  );
};
