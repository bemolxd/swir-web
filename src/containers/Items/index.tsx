import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";

import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";
import { useQueryParams } from "components/QueryParamsV2";

import { FilterSection } from "modules/items/presentation";

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
      <Card maxW="1300px" w="100%">
        <Header />
        <FilterSection />
      </Card>
      <Content />
    </VStack>
  );
});
