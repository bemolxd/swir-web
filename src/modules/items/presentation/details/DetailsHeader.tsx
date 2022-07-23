import { useNavigate } from "react-router";
import { Heading, Divider, HStack, Button } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { useIntl } from "react-intl";

import { useGetContextType } from "components/Auth";

interface IProps {
  itemName: string;
  itemId: string;
}

export const DetailsHeader = ({ itemName, itemId }: IProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const { isGlobal, isTech } = useGetContextType();
  const isAdmin = isGlobal || isTech;

  return (
    <>
      <HStack w="100%" justify="space-between">
        <Heading size="lg" fontWeight="600">
          {itemName}
        </Heading>
        {isAdmin && (
          <Button
            variant="outline"
            fontWeight="400"
            leftIcon={<MdEdit />}
            onClick={() => navigate(`/sprzet/${itemId}/edytuj`)}
          >
            {formatMessage({
              id: "ItemDetails.header.editBtn",
              defaultMessage: "Edytuj informacje",
            })}
          </Button>
        )}
      </HStack>
      <Divider />
    </>
  );
};
