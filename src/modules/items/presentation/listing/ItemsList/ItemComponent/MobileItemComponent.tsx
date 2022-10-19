import { useNavigate } from "react-router";
import { HStack, VStack } from "@chakra-ui/react";

import { ListItem, ListItemSubtitle, ListItemTitle } from "components/List";
import { Image } from "components/Image";

import { Item } from "modules/items/application";

import { AvailabilityTag } from "../../../itemAvailability/AvailabilityTag";
import { ItemAction } from "../../..//ItemAction";

interface IProps {
  item: Item;
}

export const MobileItemComponent = ({ item }: IProps) => {
  const navigate = useNavigate();

  return (
    <ListItem onClick={() => navigate(`/sprzet/${item.itemId}`)}>
      <HStack w="100%" align="center" justify="space-evenly">
        <HStack spacing={8} w="100%" align="flex-start">
          <Image src={item.imageUrl} h="80px" w="80px" borderRadius={8} />
          <VStack align="flex-start">
            <ListItemTitle>{item.name}</ListItemTitle>
            <ListItemSubtitle>{item.vendor}</ListItemSubtitle>
            <AvailabilityTag itemId={item.itemId} />
          </VStack>
        </HStack>
        <ItemAction itemId={item.itemId} />
      </HStack>
    </ListItem>
  );
};
