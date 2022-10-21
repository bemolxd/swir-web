import { VStack } from "@chakra-ui/react";

import { withErrorBoundary } from "components/ErrorBoundary";
import { useCheckMobile } from "components/Layout";

import { InfiniteUsersList } from "modules/users/presentation";

import { CasualList } from "./CasualList";

export const Content = withErrorBoundary(() => {
  const isMobile = useCheckMobile();

  return (
    <VStack w="100%">
      {isMobile ? <InfiniteUsersList /> : <CasualList />}
    </VStack>
  );
});
