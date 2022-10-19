import { Button } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router";
import { MdOutlinePostAdd } from "react-icons/md";

import { useGetContextType } from "components/Auth";

export const CreateItemButton = () => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const { isUser } = useGetContextType();

  if (isUser) return null;

  return (
    <Button
      variant="outline"
      leftIcon={<MdOutlinePostAdd />}
      onClick={() => navigate("/sprzet/dodaj")}
    >
      {formatMessage({
        id: "Items.header.createItemBtn",
        defaultMessage: "Dodaj nowy przedmiot",
      })}
    </Button>
  );
};
