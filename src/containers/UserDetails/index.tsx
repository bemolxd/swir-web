import { VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { withErrorBoundary } from "components/ErrorBoundary";

import { Content } from "./Content";

export const UserDetails = withErrorBoundary(() => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <VStack w="100%" align="flex-start">
      <Content userId={userId!} />
    </VStack>
  );
});
