import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";

import { withErrorBoundary } from "components/ErrorBoundary";
import { useQueryParams } from "components/QueryParamsV2";

import { Content } from "./Content";
import { Header } from "./Header";

export const ItemsContainer = withErrorBoundary(() => {
  const { params, set } = useQueryParams();

  useEffect(() => {
    if (isEmpty(params)) set({ limit: 10, offset: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <VStack w="100%" align="flex-start">
      <Header />
      <Content />
    </VStack>
  );
});
