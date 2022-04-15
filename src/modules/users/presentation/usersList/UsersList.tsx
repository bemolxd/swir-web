import { EmptyList } from "components/AppState";
import { List } from "components/List";

import { User } from "../../application";
import { UsersListItem } from "./UsersListItem";

interface IProps {
  users: User[] | undefined;
}

export const UsersList = ({ users }: IProps) => {
  if (!users || users.length === 0) return <EmptyList />;

  return (
    <List>
      {users.map((user) => (
        <UsersListItem key={user.userId} user={user} />
      ))}
    </List>
  );
};
