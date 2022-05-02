import { IconButton } from "components/IconButton";
import { MdEdit } from "react-icons/md";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

interface IProps {
  itemId: string;
}

export const EditItemAction = ({ itemId }: IProps) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  return (
    <IconButton
      tooltip={formatMessage({
        id: "ItemAction.editItem",
        defaultMessage: "Edytuj informacje",
      })}
      icon={<MdEdit />}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/sprzet/${itemId}/edytuj`);
      }}
    />
  );
};
