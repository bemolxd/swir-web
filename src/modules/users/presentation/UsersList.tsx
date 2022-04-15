import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

import { EmptyList } from "components/AppState";
import { List, ListItem } from "components/List";

import { User } from "../application";
import { contextMessages } from "./contextMessages";

interface IProps {
  users: User[] | undefined;
}

export const UsersList = ({ users }: IProps) => {
  if (!users || users.length === 0) return <EmptyList />;

  return (
    <List>
      {users.map((user) => (
        <UserComponent key={user.userId} user={user} />
      ))}
    </List>
  );
};

const UserComponent = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  return (
    <ListItem onClick={() => navigate(`/uzytkownicy/${user.userId}`)}>
      <HStack w="100%" align="center">
        <HStack spacing={4} w="100%" align="flex-start">
          <Avatar />
          <VStack spacing={0} align="flex-start">
            <Text>{`${user.firstName} ${user.lastName}`}</Text>
            <Text textColor="gray.500">{user.email}</Text>
          </VStack>
        </HStack>
        <Text>{formatMessage(contextMessages[user.contextType])}</Text>
      </HStack>
    </ListItem>
  );
};
