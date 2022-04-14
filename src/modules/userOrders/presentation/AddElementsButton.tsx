import { Button } from "@chakra-ui/react";
import { MdAddTask } from "react-icons/md";
import { useIntl } from "react-intl";

import { useQueryParamsConsumer } from "components/QueryParamsV2";

export const AddElementsButton = () => {
  const { formatMessage } = useIntl();
  const { navigate } = useQueryParamsConsumer();

  return (
    <Button
      leftIcon={<MdAddTask />}
      colorScheme="teal"
      variant="ghost"
      onClick={() => navigate("/sprzet")}
    >
      {formatMessage({
        id: "UserOrders.header.AddElementsButton",
        defaultMessage: "Dodaj elementy do zgłoszenia",
      })}
    </Button>
  );
};
