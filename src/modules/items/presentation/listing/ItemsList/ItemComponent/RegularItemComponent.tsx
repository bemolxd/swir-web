import { useNavigate } from "react-router";
import { Badge, HStack, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { ListItem, ListItemTitle, ListItemSubtitle } from "components/List";
import { Image } from "components/Image";

import { Item } from "modules/items/application";
import {
  itemCategoryMessages,
  itemTypeMessages,
} from "modules/items/presentation/messages";

import { ItemAction } from "../../../ItemAction";
import { AvailabilityTag } from "../../../itemAvailability";

interface IProps {
  item: Item;
}

export const RegularItemComponent = ({ item }: IProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  return (
    <ListItem onClick={() => navigate(`/sprzet/${item.itemId}`)}>
      <HStack w="100%" align="center" justify="space-evenly">
        <HStack spacing={8} w="100%" align="flex-start">
          <Image src={item.imageUrl} h="120px" w="120px" borderRadius={8} />
          <VStack align="flex-start">
            <ListItemTitle>{item.name}</ListItemTitle>
            <ListItemSubtitle>{item.vendor}</ListItemSubtitle>
            <AvailabilityTag itemId={item.itemId} />
          </VStack>
        </HStack>
        <VStack
          h="100%"
          align="flex-start"
          justify="flex-start"
          maxW="240px"
          w="100%"
        >
          <Badge variant="outline">
            {formatMessage(itemTypeMessages[item.type])}
          </Badge>
          <Badge variant="outline">
            {formatMessage(itemCategoryMessages[item.category])}
          </Badge>
        </VStack>
        <ItemAction itemId={item.itemId} />
      </HStack>
    </ListItem>
  );
};
