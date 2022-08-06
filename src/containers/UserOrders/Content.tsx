import { Divider, Text, useColorModeValue, VStack } from "@chakra-ui/react";

import { useMeQuery } from "components/Auth";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";
import { Pagination } from "components/Pagination";

import { useUserOrdersQuery } from "modules/userOrders/infrastructure";
import { OrdersList } from "modules/userOrders/presentation";

export const Content = withSuspense(() => {
  const { params } = useQueryParams();
  const me = useMeQuery();
  const orders = useUserOrdersQuery(me?.userId!, params);

  return (
    <VStack w="100%" align="flex-start">
      <SectionHeader
        title="Aktywne zgłoszenia"
        isVisible={orders?.collection?.length !== 0}
      />
      <OrdersList orders={orders?.collection!} />
      <Pagination meta={orders?.meta!} />
    </VStack>
  );
});

interface SectionProps {
  title: string;
  isVisible: boolean;
}

const SectionHeader = ({ title, isVisible }: SectionProps) => {
  const color = useColorModeValue("gray.600", "gray.400");

  if (!isVisible) return null;

  return (
    <VStack w="100%" align="flex-start">
      <Text textColor={color} ml={2}>
        {title}
      </Text>
      <Divider color={color} />
    </VStack>
  );
};
