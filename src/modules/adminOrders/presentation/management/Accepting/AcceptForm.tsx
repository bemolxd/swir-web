import { VStack } from "@chakra-ui/react";

import { Form } from "components/Form";
import { withSuspense } from "components/RemoteData";

import { AcceptOrderDto } from "modules/adminOrders/application";

import {
  DateFields,
  TechCommentField,
  TechSelectField,
  SelectedItems,
} from "./formFields";

interface IProps {
  dto: AcceptOrderDto;
  orderId: string;
  formId: string;
  onSubmit(model: AcceptOrderDto): void;
}

export const AcceptForm = withSuspense(
  ({ dto, orderId, formId, onSubmit }: IProps) => {
    return (
      <Form<AcceptOrderDto>
        id={formId}
        onSubmit={onSubmit}
        defaultValues={{
          techId: dto.techId,
          dateFrom: dto.dateFrom,
          dateTo: dto.dateTo,
          items: dto.items,
        }}
      >
        <VStack w="100%" align="flex-start" spacing={2}>
          <TechSelectField />
          <DateFields />
          <SelectedItems dto={dto} orderId={orderId} />
          <TechCommentField />
        </VStack>
      </Form>
    );
  }
);
