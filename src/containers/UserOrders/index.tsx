import { isEmpty } from "lodash";
import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { buildUrl } from "utils";

import { withErrorBoundary } from "components/ErrorBoundary";
import { useQueryParams } from "components/QueryParamsV2";

import { defaultParams } from "modules/userOrders/application";

import { Header } from "./Header";
import { Content } from "./Content";

export const UserOrders = withErrorBoundary(() => {
  const { params, url } = useQueryParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(params)) {
      navigate(buildUrl(url, defaultParams), { replace: true });
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
