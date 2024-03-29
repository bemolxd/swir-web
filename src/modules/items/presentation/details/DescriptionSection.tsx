import { Heading, Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { StyledHtml } from "components/DangerousInnerHtml";

interface IProps {
  description: string;
}

export const DescriptionSection = ({ description }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Heading size="md" fontWeight="400">
        {formatMessage({
          id: "ItemDetails.content.descriptionHeader",
          defaultMessage: "Opis:",
        })}
      </Heading>
      <StyledHtml html={description} />
      <Divider />
    </>
  );
};
