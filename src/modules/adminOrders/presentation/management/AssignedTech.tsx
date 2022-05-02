import { useIntl } from "react-intl";
import { Divider } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { PersonInfoContainer } from "modules/userOrders/presentation";
import { useUserDetailsQuery } from "modules/users/infrastructure";

interface IProps {
  techId: string;
}

export const AssignedTech = ({ techId }: IProps) => {
  const tech = useUserDetailsQuery(techId);
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "AdminOrderManagement.assignedTech.header",
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
