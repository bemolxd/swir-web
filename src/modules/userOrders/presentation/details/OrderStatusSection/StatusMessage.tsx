import { Avatar, HStack, Text } from "@chakra-ui/react";
import {
  MdCheck,
  MdWorkspacesFilled,
  MdNotInterested,
  MdRemoveCircleOutline,
} from "react-icons/md";

interface IProps {
  initMessage: string;
  activeMessage: string;
  doneMessage: string;
  isActive: boolean;
  isDone: boolean;
  isVisible: boolean;
  isRejected?: boolean;
}

export const StatusMessage = ({
  initMessage,
  activeMessage,
  doneMessage,
  isActive,
  isDone,
  isVisible,
  isRejected = false,
}: IProps) => {
  if (!isVisible) return null;

  if (isRejected)
    return (
      <HStack>
        <Avatar
          size="sm"
          bg="red.300"
          textColor="red.600"
          fontSize="22px"
          icon={<MdRemoveCircleOutline />}
        />
        <Text>{activeMessage}</Text>
      </HStack>
    );

  if (isActive)
    return (
      <HStack>
        <Avatar
          size="sm"
          bg="blue.300"
          textColor="blue.600"
          fontSize="22px"
          icon={<MdWorkspacesFilled />}
        />
        <Text>{activeMessage}</Text>
      </HStack>
    );

  if (isDone)
    return (
      <HStack>
        <Avatar
          size="sm"
          bg="green.300"
          textColor="green.600"
          fontSize="22px"
          icon={<MdCheck />}
        />
        <Text textColor="gray.500">{doneMessage}</Text>
      </HStack>
    );

  return (
    <HStack>
      <Avatar
        size="sm"
        bg="gray.300"
        textColor="gray.600"
        fontSize="22px"
        icon={<MdNotInterested />}
      />
      <Text textColor="gray.500">{initMessage}</Text>
    </HStack>
  );
};
