import { Box, useColorModeValue, useTheme } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { DangerousInnerHtml } from "./DangerousInnerHtml";

interface IProps {
  html: string;
}

export const StyledHtml = ({ html }: IProps) => {
  const { colors } = useTheme();
  const codeBg = useColorModeValue(colors.gray[100], colors.gray[600]);

  return (
    <StyledBox codeBg={codeBg}>
      <DangerousInnerHtml html={html} />
    </StyledBox>
  );
};

const StyledBox = styled(Box)<{ codeBg: string }>`
  * {
    width: 100%;
  }

  ul,
  ol,
  dl {
    list-style-position: inside;
  }

  code {
    padding: 3px;
    background-color: ${({ codeBg }) => codeBg};
    font-size: 90%;
    border-radius: 6px;
  }
`;
