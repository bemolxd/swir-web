import { useParams } from "react-router-dom";
import { useIntl } from "react-intl";

import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";
import { GetBackButton } from "components/GetBackButton";

import { Content } from "./Content";
import { VStack } from "@chakra-ui/react";

export const ItemDetailsContainer = withErrorBoundary(() => {
  const { itemId } = useParams<{ itemId: string }>();
  const { formatMessage } = useIntl();

  return (
    <VStack w="100%" align="flex-start" spacing={4}>
      <GetBackButton
        label={formatMessage({
          id: "ItemDetails.getBackBtnLabel",
          defaultMessage: "Wróć do listy urządzeń",
        })}
        path="/sprzet"
      />
      <Card maxW="1300px" w="100%">
        <Content itemId={itemId!} />
      </Card>
    </VStack>
  );
});
