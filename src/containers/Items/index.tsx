import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";

import { Content } from "./Content";
import { Header } from "./Header";

export const ItemsContainer = withErrorBoundary(() => {
  return (
    <Card maxW="1300px" w="100%">
      <Header />
      <Content />
    </Card>
  );
});
