import { Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import {
  InfoDetailsContainer,
  InfoDetailsLabel,
  InfoDetailsContent,
} from "components/Card";

import { User } from "modules/users/application";

import { SelectRole } from "../usersList/SelectRole";

interface IProps {
  user: User;
}

export const ChangeRoleSection = ({ user }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserDetails.changeRole.header",
            defaultMessage: "Zmień rolę",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <SelectRole
            userId={user?.userId!}
            defaultValue={user?.contextType!}
          />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
