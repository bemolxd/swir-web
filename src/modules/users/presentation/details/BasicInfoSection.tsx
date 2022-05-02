import {
  Avatar,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { MdOutlineEmail } from "react-icons/md";

import { User } from "modules/users/application";

interface IProps {
  user: User;
}

export const BasicInfoSection = ({ user }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <HStack w="100%" justify="space-between" align="flex-start" mb={4}>
        <HStack align="flex-start" spacing={8}>
          <Avatar size="2xl" />
          <VStack align="flex-start">
            <Heading
              fontWeight="400"
              size="lg"
            >{`${user?.firstName} ${user?.lastName}`}</Heading>
            <Text textColor="gray.500">{user?.email}</Text>
          </VStack>
        </HStack>
        <Button
          leftIcon={<MdOutlineEmail />}
          fontWeight="400"
          onClick={(e) => {
            window.location.href = `mailto:${user?.email}`;
            e.preventDefault();
          }}
          variant="outline"
        >
          {formatMessage({
            id: "UserDetails.contactBtn",
            defaultMessage: "Kontakt",
          })}
        </Button>
      </HStack>
      <Divider />
    </>
  );
};
