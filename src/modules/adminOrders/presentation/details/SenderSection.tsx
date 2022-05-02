import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";

import { useUserDetailsQuery } from "modules/users/infrastructure";
import { PersonInfoContainer } from "modules/userOrders/presentation";

interface IProps {
  senderId: string;
}

export const SenderSection = ({ senderId }: IProps) => {
  const { formatMessage } = useIntl();
  const sender = useUserDetailsQuery(senderId);

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "AdminOrderDetails.senderSection.header",
            defaultMessage: "Osoba zgłaszająca",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <PersonInfoContainer
            name={`${sender?.firstName} ${sender?.lastName}`}
            email={sender?.email!}
          />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
