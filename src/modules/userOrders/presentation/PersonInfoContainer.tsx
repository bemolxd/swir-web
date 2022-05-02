import { Avatar, Button, HStack, VStack, Text } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { useIntl } from "react-intl";

interface IProps {
  name: string;
  email: string;
  allowContacting?: boolean;
}

export const PersonInfoContainer = ({
  name,
  email,
  allowContacting = true,
}: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <HStack align="center" justify="space-between" w="100%">
      <HStack spacing={4}>
        <Avatar size="md" />
        <VStack spacing={0} align="flex-start">
          <Text>{name}</Text>
          <Text textColor="gray.500">{email}</Text>
        </VStack>
      </HStack>
      {allowContacting && (
        <Button
          leftIcon={<MdOutlineEmail />}
          fontWeight="400"
          onClick={(e) => {
            window.location.href = `mailto:${email}`;
            e.preventDefault();
          }}
          variant="outline"
        >
          {formatMessage({
            id: "OrderDetails.PersonInfoContainer.contactBtn",
            defaultMessage: "Kontakt",
          })}
        </Button>
      )}
    </HStack>
  );
};
