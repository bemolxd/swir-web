import { useNavigate } from "react-router-dom";

import { ListItem } from "components/List";
import { useCheckMobile } from "components/Layout";

import { User } from "modules/users/application";

import { ItemContent } from "./ItemContent";
import { MobileItemContent } from "./MobileItemContent";

interface IProps {
  user: User;
}

export const UsersListItem = ({ user }: IProps) => {
  const navigate = useNavigate();
  const isMobile = useCheckMobile();

  return (
    <ListItem onClick={() => navigate(`/uzytkownicy/${user.userId}`)}>
      {isMobile ? (
        <MobileItemContent
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          userId={user.userId}
          contextType={user.contextType}
        />
      ) : (
        <ItemContent
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          userId={user.userId}
          contextType={user.contextType}
        />
      )}
    </ListItem>
  );
};
