import { Heading, Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import styled from "@emotion/styled";

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
      <StyledHtml>
        <DangerousInnerHtml html={parameters} />
      </StyledHtml>
      <Divider />
    </>
  );
};

const StyledHtml = styled.div`
  * {
    width: 100%;
  }

  ul,
  ol,
  dl {
    list-style-position: inside;
  }
`;
