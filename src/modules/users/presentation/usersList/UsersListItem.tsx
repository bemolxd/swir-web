import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { HStack, Avatar, Text, VStack } from "@chakra-ui/react";

import { ListItem } from "components/List";

import { User } from "modules/users/application";

import { contextMessages } from "../contextMessages";
import { SelectRole } from "./SelectRole";

interface IProps {
  user: User;
}

export const UsersListItem = ({ user }: IProps) => {
  const navigate = useNavigate();

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
        <SelectRole userId={user.userId} defaultValue={user.contextType} />
      </HStack>
    </ListItem>
  );
};
