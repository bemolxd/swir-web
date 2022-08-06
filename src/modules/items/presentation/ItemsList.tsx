import { useNavigate } from "react-router-dom";
import { HStack, VStack } from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListItemSubtitle,
  ListItemTitle,
} from "components/List";
import { Image } from "components/Image";
import { EmptyList } from "components/AppState";

import { Item } from "../application";
import { ItemAction } from "./ItemAction";

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

const ItemComponent = ({ item }: { item: Item }) => {
  const navigate = useNavigate();

  return (
    <ListItem onClick={() => navigate(`/sprzet/${item.itemId}`)}>
      <HStack w="100%" align="center">
        <HStack spacing={8} w="100%" align="flex-start">
          <Image src={item.imageUrl} h="120px" w="120px" borderRadius={8} />
          <VStack align="flex-start">
            <ListItemTitle>{item.name}</ListItemTitle>
            <ListItemSubtitle>{item.vendor}</ListItemSubtitle>
          </VStack>
        </HStack>
        <ItemAction itemId={item.itemId} />
      </HStack>
    </ListItem>
  );
};
