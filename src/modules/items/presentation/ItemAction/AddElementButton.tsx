import { Button, ButtonProps } from "@chakra-ui/react";
import { MdAddTask } from "react-icons/md";
import { useIntl } from "react-intl";

import { useAddItemAction } from "./useAddItemAction";
import { actionMessages } from "./actionMessages";

interface IProps {
  itemId: string;
  variant?: ButtonProps["variant"];
  colorScheme?: ButtonProps["colorScheme"];
}

export const AddElementButton = ({
  itemId,
  variant = "outline",
  colorScheme,
}: IProps) => {
  const { formatMessage } = useIntl();

  const { addElementAction, isLoading } = useAddItemAction(itemId);

  return (
    <Button
      variant={variant}
      colorScheme={colorScheme}
      leftIcon={<MdAddTask />}
      isLoading={isLoading}
      onClick={addElementAction}
      fontWeight="400"
    >
      {formatMessage(actionMessages.addToOrderBtnLabel)}
    </Button>
  );
};
