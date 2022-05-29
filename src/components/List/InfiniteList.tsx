import { Box, Center, Spinner, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";
import InfiniteScroll, {
  Props as InfiniteScrollProps,
} from "react-infinite-scroll-component";

import { QueryListData } from "types";

interface IProps<Data extends QueryListData>
  extends Partial<InfiniteScrollProps> {
  limit: number;
  data: Data[] | undefined;
  children(data: Data, index: number): ReactElement;
  next(): any;
  hasMore: boolean;
}

export const InfiniteList = <Data extends QueryListData>({
  data,
  limit,
  children,
  next,
  hasMore,
  ...props
}: IProps<Data>) => {
  return (
    <Box w="100%" overflowY="scroll">
      <InfiniteScroll
        loader={
          <Center mt={8}>
            <Spinner />
          </Center>
        }
        dataLength={data?.length ?? limit}
        next={next}
        hasMore={hasMore}
        scrollThreshold={0.95}
        {...props}
      >
        {data?.map((data, idx) => (
          <Stack key={idx} mb={2}>
            {children(data, idx)}
          </Stack>
        ))}
      </InfiniteScroll>
    </Box>
  );
};
