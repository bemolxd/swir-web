import { Button, Divider, Heading, HStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router";

export const Header = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  return (
    <>
      <HStack w="100%" justify="space-between">
        <Heading size="lg" fontWeight="400">
          {formatMessage({
            id: "CreateItemDetails.header",
            defaultMessage: "Dodaj przedmiot",
          })}
        </Heading>
        <Button variant="outline" fontWeight="400" onClick={() => navigate(-1)}>
          {formatMessage({
            id: "CreateItemDetails.header.cancelBtn",
            defaultMessage: "Anuluj",
          })}
        </Button>
      </HStack>
      <Divider />
    </>
  );
};
