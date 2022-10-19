import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { useUserDetailsQuery } from "modules/users/infrastructure";

import { PersonInfoContainer } from "../PersonInfoContainer";

interface IProps {
  techId: string;
}
export const TechUserSection = ({ techId }: IProps) => {
  const { formatMessage } = useIntl();
  const tech = useUserDetailsQuery(techId);

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderDetails.assignedTech.header",
            defaultMessage: "Opiekun zgłoszenia",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <PersonInfoContainer
            name={`${tech?.firstName} ${tech?.lastName}`}
            email={tech?.email!}
          />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
