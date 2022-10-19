import { VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { buildUrl } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { withErrorBoundary } from "components/ErrorBoundary";

import { defaultParams } from "modules/userOrders/application";

import { Header } from "./Header";
import { Content } from "./Content";

export const AdminOrders = withErrorBoundary(() => {
  const { params, url } = useQueryParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(params)) {
      navigate(buildUrl(url, defaultParams), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <VStack w="100%" align="flex-start" spacing={2}>
      <Header />
      <Content />
    </VStack>
  );
});
