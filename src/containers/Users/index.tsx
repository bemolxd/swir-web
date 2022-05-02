import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

import { buildUrl } from "utils";

import { useQueryParams } from "components/QueryParamsV2";

import { Header } from "./Header";
import { Content } from "./Content";

export const Users = () => {
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
};
