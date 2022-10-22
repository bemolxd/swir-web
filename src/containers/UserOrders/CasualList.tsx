import { VStack, Text, Divider, useColorModeValue } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Pagination } from "components/Pagination";
import { useMeQuery } from "components/Auth";
import { useQueryParams } from "components/QueryParamsV2";
import { withSuspense } from "components/RemoteData";

import { OrdersList } from "modules/userOrders/presentation";
import { useUserOrdersQuery } from "modules/userOrders/infrastructure";

export const CasualList = withSuspense(() => {
  const { params } = useQueryParams();
  const me = useMeQuery();
  const orders = useUserOrdersQuery(me?.userId!, params);

  const sectionColor = useColorModeValue("gray.600", "gray.400");
  const { formatMessage } = useIntl();

  return (
    <>
      {orders?.collection?.length !== 0 && (
        <VStack w="100%" align="flex-start">
          <Text textColor={sectionColor} ml={2}>
            {formatMessage({
              id: "UserOrders.activeOrdersSectionLabel",
              defaultMessage: "Aktywne zgłoszenia",
            })}
          </Text>
          <Divider color={sectionColor} />
        </VStack>
      )}
      <OrdersList orders={orders?.collection!} />
      <Pagination meta={orders?.meta!} />
    </>
  );
});
