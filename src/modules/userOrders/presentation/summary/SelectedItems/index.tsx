import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsLabel,
  InfoDetailsContent,
} from "components/Card";

import { SelectedItem } from "modules/userOrders/application";

import { SelectedItemsList } from "./SelectedItemsList";

interface IProps {
  items: SelectedItem[];
  orderId: string;
}

export const SelectedItems = ({ items, orderId }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderSummary.orderSelectedItems.label",
            defaultMessage: "Sprzęt",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent align="flex-end">
          <SelectedItemsList items={items} orderId={orderId} />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
