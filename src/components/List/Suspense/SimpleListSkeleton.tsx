import { Skeleton } from "@chakra-ui/react";

import { SimpleList } from "../SimpleList";
import { SimpleListItem } from "../SimpleListItem";

export const SimpleListSkeleton = () => {
  return (
    <SimpleList>
      <SimpleListItem>
        <Skeleton height="24px" w="100%" />
      </SimpleListItem>
      <SimpleListItem>
        <Skeleton height="24px" w="100%" />
      </SimpleListItem>
    </SimpleList>
  );
};
