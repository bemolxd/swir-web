import { useParams } from "react-router-dom";

import { withErrorBoundary } from "components/ErrorBoundary";
import { Card } from "components/Card";
import { Content } from "./Content";

export const EditItemDetails = withErrorBoundary(() => {
  const { itemId } = useParams<{ itemId: string }>();

  return (
    <Card maxW="1300px" w="100%">
      <Content itemId={itemId!} />
    </Card>
  );
});
