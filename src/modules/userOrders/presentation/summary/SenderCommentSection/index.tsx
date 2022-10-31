import { useIntl } from "react-intl";
import { Divider, Textarea } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";
import { FormControl } from "components/Form";

export const SenderCommentSection = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderSummary.senderComment.label",
            defaultMessage: "Dodaj cel wypożyczenia",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <FormControl name="senderComment" w="100%">
            {(
              { setValue, setError, clearErrors, register },
              fieldProps,
              { isInvalid }
            ) => (
              <Textarea
                {...fieldProps}
                {...register("senderComment", { required: true })}
                resize="none"
                isInvalid={isInvalid}
                placeholder={formatMessage({
                  id: "UserOrderSummary.senderComment.placeholder",
                  defaultMessage: "Dodaj cel wypożyczenia",
                })}
                onChange={({ target: { value } }) => {
                  setValue("senderComment", value);

                  if (value === "") {
                    setError("senderComment", {
                      message: "Określ cel wypożyczenia",
                    });
                  }
                  if (value) clearErrors("senderComment");
                }}
                onBlur={({ target: { value } }) => {
                  if (value === "") {
                    setError("senderComment", {
                      message: "Określ cel wypożyczenia",
                    });
                    return;
                  }
                }}
              />
            )}
          </FormControl>
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
