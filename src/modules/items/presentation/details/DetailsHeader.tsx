import { useNavigate } from "react-router";
import { Heading, Divider, Stack, Button } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { useIntl } from "react-intl";

import { useGetContextType } from "components/Auth";
import { useCheckMobile } from "components/Layout";

import { AddElementButton } from "../ItemAction";

interface IProps {
  itemName: string;
  itemId: string;
}

export const DetailsHeader = ({ itemName, itemId }: IProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const { isGlobal, isTech } = useGetContextType();
  const isAdmin = isGlobal || isTech;
  const isMobile = useCheckMobile();

  return (
    <>
      <Stack
        flexDir={isMobile ? "column" : "row"}
        w="100%"
        justify="space-between"
      >
        <Heading size="lg" fontWeight="600" isTruncated>
          {itemName}
        </Heading>
        {isAdmin ? (
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
        ) : (
          <AddElementButton itemId={itemId} />
        )}
      </Stack>
      <Divider />
    </>
  );
};
