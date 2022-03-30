import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";

import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";

import { FilterSection } from "modules/items/presentation";

import { Content } from "./Content";
import { Header } from "./Header";
import {
  ArrayParam,
  NumberParam,
  useQueryParams,
  withDefault,
} from "use-query-params";
import { ItemsQueryParams } from "modules/items/application";

export const ItemsContainer = withErrorBoundary(() => {
  // useEffect(() => {
  //   if (isEmpty(params)) {
  //     setAll({
  //       limit: "10",
  //       offset: "0",
  //     });
  //   }
  // }, [params, setAll]);

  const [params, setParams] = useQueryParams({
    limit: NumberParam,
    offset: NumberParam,
    type: withDefault(ArrayParam, []),
  });

  console.log("new params", params);

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
