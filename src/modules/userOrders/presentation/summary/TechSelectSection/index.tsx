import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { TechSelect } from "./TechSelect";

export const TechSelectSection = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderSummary.techSelect.label",
            defaultMessage: "Opiekun",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <TechSelect />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
