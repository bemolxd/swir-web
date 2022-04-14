import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { Button } from "@chakra-ui/react";
import { MdDoneAll } from "react-icons/md";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { OrderStatus } from "modules/userOrders/application";

interface IProps {
  status: OrderStatus;
}

export const OrderSummarySection = ({ status }: IProps) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  if (status !== OrderStatus.COMPLETING) return null;

  return (
    <InfoDetailsContainer>
      <InfoDetailsLabel>
        {formatMessage({
          id: "UserOrderDetails.summarySection.header",
          defaultMessage: "Podsumowanie",
        })}
      </InfoDetailsLabel>
      <InfoDetailsContent align="flex-end">
        <Button
          variant="outline"
          leftIcon={<MdDoneAll />}
          onClick={() => navigate("podsumowanie")}
        >
          {formatMessage({
            id: "UserOrderDetails.summarySection.button",
            defaultMessage: "Przejdź do podsumowania",
          })}
        </Button>
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
