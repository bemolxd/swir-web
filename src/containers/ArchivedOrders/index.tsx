import { useNavigate } from "react-router";
import { isEmpty } from "lodash";
import { buildUrl } from "utils";
import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";

import { withErrorBoundary } from "components/ErrorBoundary";
import { useQueryParams } from "components/QueryParamsV2";

import { defaultParams } from "modules/userOrders/application";

import { Header } from "./Header";
import { Content } from "./Content";

export const ArchivedOrders = withErrorBoundary(() => {
  const { params, url } = useQueryParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(params)) {
      navigate(buildUrl(url, defaultParams), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <VStack w="100%" align="flex-start" spacing={1}>
      <Header />
      <Content />
    </VStack>
  );
});
