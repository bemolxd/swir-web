import { Heading, Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { DangerousInnerHtml } from "components/DangerousInnerHtml";

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
      <DangerousInnerHtml html={parameters} />
      <Divider />
    </>
  );
};
