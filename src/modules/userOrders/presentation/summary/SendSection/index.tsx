import { Button, HStack } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import { useIntl } from "react-intl";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

import {
  InfoDetailsContainer,
  InfoDetailsLabel,
  InfoDetailsContent,
} from "components/Card";
import { isEmpty } from "lodash";

interface IProps {
  formId: string;
}

export const SendSection = ({ formId }: IProps) => {
  const { formatMessage } = useIntl();
  const { formState, getValues } = useFormContext();
  const navigate = useNavigate();

  return (
    <InfoDetailsContainer>
      <InfoDetailsLabel>
        {formatMessage({
          id: "UserOrderSummary.summarySection.header",
          defaultMessage: "Prześlij zgłoszenie",
        })}
      </InfoDetailsLabel>
      <InfoDetailsContent align="flex-end">
        <HStack>
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => navigate(-1)}
          >
            {formatMessage({
              id: "UserOrderSummary.summarySection.cancelBtn",
              defaultMessage: "Anuluj",
            })}
          </Button>
          <Button
            variant="outline"
            leftIcon={<MdSend />}
            colorScheme="teal"
            form={formId}
            type="submit"
            isDisabled={
              !isEmpty(formState.errors) || isEmpty(getValues("items"))
            }
            isLoading={formState.isSubmitting}
          >
            {formatMessage({
              id: "UserOrderSummary.summarySection.submitBtn",
              defaultMessage: "Wyślij",
            })}
          </Button>
        </HStack>
      </InfoDetailsContent>
    </InfoDetailsContainer>
  );
};
