import { VStack } from "@chakra-ui/react";

import { Form } from "components/Form";
import { useReloadWarning } from "components/Layout/useReloadWarning";
import { withSuspense } from "components/RemoteData";

import { Item } from "modules/items/application";
import { useItemDetailsQuery } from "modules/items/infrastructure";
import { EditBasicInfoSection } from "modules/items/presentation";

import { Header } from "./Header";

interface IProps {
  itemId: string;
}

export const Content = withSuspense(({ itemId }: IProps) => {
  const itemDetails = useItemDetailsQuery(itemId);

  const formId = `item.${itemId}.editForm`;
  const handleOnSubmit = (item: Item) => console.log(item);

  useReloadWarning();

  return (
    <Form<Item>
      id={formId}
      onSubmit={(data) => handleOnSubmit(data)}
      defaultValues={itemDetails}
    >
      <VStack align="flex-start" w="100%">
        <Header />
        <EditBasicInfoSection item={itemDetails!} />
      </VStack>
    </Form>
  );
});
