import { useIntl } from "react-intl";
import { Divider, Textarea } from "@chakra-ui/react";

import {
  InfoDetailsContainer,
  InfoDetailsContent,
  InfoDetailsLabel,
} from "components/Card";
import { useFormContext } from "react-hook-form";

export const SenderCommentSection = () => {
  const { formatMessage } = useIntl();
  const { register, setValue } = useFormContext();

  return (
    <>
      <InfoDetailsContainer>
        <InfoDetailsLabel>
          {formatMessage({
            id: "UserOrderSummary.senderComment.label",
            defaultMessage: "Dodaj komentarz",
          })}
        </InfoDetailsLabel>
        <InfoDetailsContent>
          <Textarea
            {...register("senderComment")}
            resize="none"
            placeholder={formatMessage({
              id: "UserOrderSummary.senderComment.placeholder",
              defaultMessage: "Dodaj komentarz",
            })}
            onChange={(e) => setValue("senderComment", e.target.value)}
          />
        </InfoDetailsContent>
      </InfoDetailsContainer>
      <Divider />
    </>
  );
};
