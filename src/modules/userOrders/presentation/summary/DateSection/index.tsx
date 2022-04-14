import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";
import { DateSelects } from "./DateSelects";

export const DateSection = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderSummary.orderDate.label",
            defaultMessage: "Czas wypożyczenia",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <DateSelects />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
