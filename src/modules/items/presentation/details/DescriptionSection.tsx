import { Heading, Divider } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import styled from "@emotion/styled";

import { DangerousInnerHtml } from "components/DangerousInnerHtml";

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
      <StyledHtml>
        <DangerousInnerHtml html={description} />
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

  // TODO: kolorystyka na zmiennych motywach
  // code {
  //   padding: 3px;
  //   background-color: #2d3748;
  //   font-size: 90%;
  // }
`;
