import { useIntl } from "react-intl";
import { MdAddTask } from "react-icons/md";

import { IconButton } from "components/IconButton";

import { useAddItemAction } from "./useAddItemAction";
import { actionMessages } from "./actionMessages";

interface IProps {
  itemId: string;
}

export const AddElementAction = ({ itemId }: IProps) => {
  const { formatMessage } = useIntl();

  const { addElementAction, isLoading } = useAddItemAction(itemId);

  return (
    <IconButton
      tooltip={formatMessage(actionMessages.addToOrderTooltip)}
      icon={<MdAddTask />}
      isLoading={isLoading}
      onClick={async (e) => {
        e.stopPropagation();

        addElementAction();
      }}
    />
  );
};
