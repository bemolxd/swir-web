import { VStack } from "@chakra-ui/react";
import { buildUrl } from "utils";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useQueryParams } from "components/QueryParamsV2";
import { withErrorBoundary } from "components/ErrorBoundary";

import { defaultParams } from "modules/userOrders/application";

import { Content } from "./Content";

export const UserDetails = withErrorBoundary(() => {
  const { userId } = useParams<{ userId: string }>();

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
      <Content userId={userId!} />
    </VStack>
  );
});
