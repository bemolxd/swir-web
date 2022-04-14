import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router";
import { buildUrl } from "utils";

import { withErrorBoundary } from "components/ErrorBoundary";
import { useQueryParams } from "components/QueryParamsV2";

import { Content } from "./Content";
import { Header } from "./Header";

export const ItemsContainer = withErrorBoundary(() => {
  const { params, url } = useQueryParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(params)) {
      navigate(buildUrl(url, { limit: 10, offset: 0 }), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <VStack w="100%" align="flex-start">
      <Header />
      <Content />
    </VStack>
  );
});
