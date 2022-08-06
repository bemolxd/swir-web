import { Button, HStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";

export const CreateSummarySection = () => {
  const { formatMessage } = useIntl();
  const formId = "item.createForm";
  const {
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <HStack justify="flex-end" w="100%">
      <Button
        colorScheme="teal"
        type="submit"
        form={formId}
        isLoading={isSubmitting}
        isDisabled={!isEmpty(errors)}
      >
        {formatMessage({
          id: "CreateSummarySection.saveBtn",
          defaultMessage: "Zapisz",
        })}
      </Button>
    </HStack>
  );
};
