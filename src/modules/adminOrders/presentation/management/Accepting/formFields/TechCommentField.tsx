import { Textarea } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { FormControl } from "components/Form";

export const TechCommentField = () => {
  const { formatMessage } = useIntl();

  return (
    <FormControl
      name="techComment"
      isRequired={false}
      label={formatMessage({
        id: "AdminOrderManagement.acceptModal.techComment",
        defaultMessage: "Komentarz dla osoby zgłaszającej:",
      })}
    >
      {({ register }, fieldProps, _) => {
        return (
          <Textarea
            {...fieldProps}
            {...register("techComment")}
            resize="none"
            placeholder={formatMessage({
              id: "AdminOrderManagement.acceptModal.techComment.placeholder",
              defaultMessage: "Dodaj komentarz",
            })}
          />
        );
      }}
    </FormControl>
  );
};
