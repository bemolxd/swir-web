import { useIntl } from "react-intl";
import {
  StateContainer,
  StateImage,
  StateSubtitle,
  StateTitle,
} from "./components";
import { ResearchSvg } from "./svg";

interface IProps {
  svgHeight?: number | string;
}

export const AwaitingAction = ({ svgHeight = "160px" }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <StateContainer>
      <StateImage>
        <ResearchSvg style={{ height: svgHeight, width: "100%" }} />
      </StateImage>
      <StateTitle>
        {formatMessage({
          id: "AppState.ActionAwaiting.title",
          defaultMessage: "Wybierz element",
        })}
      </StateTitle>
      <StateSubtitle>
        {formatMessage({
          id: "AppState.ActionAwaiting.subtitle",
          defaultMessage:
            "Wybierz element z kalendarza, aby dowiedzieć się więcej",
        })}
      </StateSubtitle>
    </StateContainer>
  );
};
