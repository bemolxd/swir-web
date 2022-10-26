import { Heading, Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { StyledHtml } from "components/DangerousInnerHtml";

interface IProps {
  parameters: string;
}

export const ParametersSection = ({ parameters }: IProps) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Heading size="md" fontWeight="400">
        {formatMessage({
          id: "ItemDetails.content.parametersHeader",
          defaultMessage: "Parametry techniczne:",
        })}
      </Heading>
      <StyledHtml html={parameters} />
      <Divider />
    </>
  );
};
