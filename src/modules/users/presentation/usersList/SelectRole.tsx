import { useIntl } from "react-intl";
import { HStack, Spinner } from "@chakra-ui/react";

import { ContextType, IOption } from "types";

import { Select } from "components/Select";
import { useGetContextType } from "components/Auth";

import { useChangeUserRole } from "modules/users/infrastructure";

import { contextMessages } from "../contextMessages";
import { useChangeRoleNotification } from "./useChangeRoleNotifications";

interface IProps {
  userId: string;
  defaultValue: ContextType;
}

export const SelectRole = ({ defaultValue, userId }: IProps) => {
  const { isGlobal } = useGetContextType();
  const { formatMessage } = useIntl();
  const [changeRole, isLoading] = useChangeUserRole(userId);
  const { showSuccessNotification, showErrorNotification } =
    useChangeRoleNotification();

  const options: IOption[] = [
    {
      label: formatMessage(contextMessages[ContextType.USER]),
      value: ContextType.USER,
    },
    {
      label: formatMessage(contextMessages[ContextType.GLOBAL]),
      value: ContextType.GLOBAL,
    },
    {
      label: formatMessage(contextMessages[ContextType.TECH]),
      value: ContextType.TECH,
    },
  ];

  const handleChange = async (contextType: ContextType) => {
    try {
      await changeRole({ contextType });
      showSuccessNotification();
    } catch (error) {
      showErrorNotification();
    }
  };

  if (!isGlobal) return null;

  return (
    <HStack w="100%" justify="flex-end">
      <Select
        options={options}
        value={defaultValue}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => handleChange(e.target.value as ContextType)}
        isDisabled={isLoading}
        icon={isLoading ? <Spinner /> : undefined}
        isTruncated={true}
        maxW="200px"
        w="100%"
      />
    </HStack>
  );
};
