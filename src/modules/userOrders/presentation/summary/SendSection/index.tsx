import { Button } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import { useIntl } from "react-intl";
import { useFormContext } from "react-hook-form";

import {
  InfoDetailsContainer,
  InfoDetailsLabel,
  InfoDetailsContent,
} from "components/Card";

interface IProps {
  formId: string;
}

export const SendSection = ({ formId }: IProps) => {
  const { formatMessage } = useIntl();
  const { formState } = useFormContext();

  return (
    <InfoDetailsContainer>
      <InfoDetailsLabel>
        {formatMessage({
          id: "UserOrderSummary.summarySection.header",
          defaultMessage: "Prześlij zgłoszenie",
        })}
      </InfoDetailsLabel>
      <InfoDetailsContent align="flex-end">
        <Button
          variant="outline"
          leftIcon={<MdSend />}
          colorScheme="teal"
          onClick={() => {}}
          form={formId}
          type="submit"
          isLoading={formState.isSubmitting}
        >
          {formatMessage({
            id: "UserOrderSummary.summarySection.button",
            defaultMessage: "Wyślij",
          })}
        </Button>
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
