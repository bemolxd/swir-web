import { useCheckMobile } from "components/Layout";

import { Item } from "modules/items/application";

import { MobileItemComponent } from "./MobileItemComponent";
import { RegularItemComponent } from "./RegularItemComponent";

interface IProps {
  item: Item;
}

export const ItemComponent = ({ item }: IProps) => {
  const isMobile = useCheckMobile();

  if (isMobile) return <MobileItemComponent item={item} />;

  return <RegularItemComponent item={item} />;
};
