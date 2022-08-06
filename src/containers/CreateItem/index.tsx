import { VStack } from "@chakra-ui/react";
import { isNil } from "lodash";
import { useNavigate } from "react-router";

import { Card } from "components/Card";
import { withErrorBoundary } from "components/ErrorBoundary";
import { useReloadWarning } from "components/Layout";
import { Form } from "components/Form";

import { CreateItemDto } from "modules/items/application";
import {
  CreateBasicInfoSection,
  CreateSummarySection,
  EditDetailsSection,
  useCreateItemNotifications,
} from "modules/items/presentation";
import { useCreateItem } from "modules/items/infrastructure";

import { Header } from "./Header";

export const CreateItem = withErrorBoundary(() => {
  const {
    showSuccessNotification,
    showErrorNotification,
    showMissingDataNotification,
  } = useCreateItemNotifications();
  const [createItem] = useCreateItem();
  const navigate = useNavigate();

  const checkMissingData = (item: CreateItemDto) => {
    const { imageUrl, subcategory, quantity, ...body } = item;
    const values = Array.from(Object.values(body));

    const hasMissingData =
      values.findIndex((value) => value === "" || isNil(value)) > -1;

    if (hasMissingData) {
      showMissingDataNotification();
      throw Error;
    }
  };

  const formId = "item.createForm";
  const handleOnSubmit = async (item: CreateItemDto) => {
    console.log("data", item);
    try {
      checkMissingData(item);
      await createItem(item);
      showSuccessNotification();
      navigate("/sprzet", { replace: true });
    } catch {
      showErrorNotification();
    }
  };

  useReloadWarning();

  return (
    <Card maxW="1300px" w="100%">
      <Form<CreateItemDto>
        id={formId}
        onSubmit={(data) => handleOnSubmit(data)}
        defaultValues={{
          quantity: 1,
        }}
        resetOnSubmit
      >
        <VStack align="flex-start" w="100%">
          <Header />
          <CreateBasicInfoSection />
          <EditDetailsSection />
          <CreateSummarySection />
        </VStack>
      </Form>
    </Card>
  );
});
