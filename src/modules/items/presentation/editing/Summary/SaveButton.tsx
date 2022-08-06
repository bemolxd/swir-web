import { Button } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";

interface IProps {
  itemId: string;
}

export const SaveButton = ({ itemId }: IProps) => {
  const { formatMessage } = useIntl();
  const {
    formState: { isSubmitting, errors },
  } = useFormContext();
  const formId = `item.${itemId}.editForm`;

  return (
    <Button
      form={formId}
      type="submit"
      colorScheme="teal"
      isLoading={isSubmitting}
      isDisabled={!isEmpty(errors)}
    >
      {formatMessage({ id: "saveBtn", defaultMessage: "Zapisz" })}
    </Button>
  );
};
