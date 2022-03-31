import { VStack } from "@chakra-ui/react";

import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";

import { FilterSection } from "modules/items/presentation";

import { Content } from "./Content";
import { Header } from "./Header";

export const ItemsContainer = withErrorBoundary(() => {
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
