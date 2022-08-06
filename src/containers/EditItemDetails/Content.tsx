import { useNavigate } from "react-router";
import { VStack } from "@chakra-ui/react";

import { Form } from "components/Form";
import { useReloadWarning } from "components/Layout/useReloadWarning";
import { withSuspense } from "components/RemoteData";

import { EditItemDto } from "modules/items/application";
import { useEditItem, useItemDetailsQuery } from "modules/items/infrastructure";
import {
  EditBasicInfoSection,
  EditDetailsSection,
  SummarySection,
  useEditItemNotifications,
} from "modules/items/presentation";

import { Header } from "./Header";

interface IProps {
  itemId: string;
}

export const Content = withSuspense(({ itemId }: IProps) => {
  const itemDetails = useItemDetailsQuery(itemId);

  const { showSuccessNotification, showErrorNotification } =
    useEditItemNotifications();
  const navigate = useNavigate();
  const [editItem] = useEditItem(itemId);

  const formId = `item.${itemId}.editForm`;
  const handleOnSubmit = async (item: EditItemDto) => {
    try {
      await editItem(item);
      showSuccessNotification();
      navigate(`/sprzet/${itemId}`, { replace: true });
    } catch {
      showErrorNotification();
    }
  };

  useReloadWarning();

  return (
    <Form<EditItemDto>
      id={formId}
      onSubmit={(data) => handleOnSubmit(data)}
      defaultValues={itemDetails}
      resetOnSubmit
    >
      <VStack align="flex-start" w="100%">
        <Header />
        <EditBasicInfoSection item={itemDetails!} />
        <EditDetailsSection />
        <SummarySection itemId={itemDetails?.itemId!} />
      </VStack>
    </Form>
  );
});
