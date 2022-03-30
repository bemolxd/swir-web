import { useIntl } from "react-intl";

import {
  StateAction,
  StateContainer,
  StateImage,
  StateSubtitle,
  StateTitle,
} from "./components";
import { ServerDownSvg } from "./svg";

interface IProps {
  onAction(): void;
}

export const ServerError = ({ onAction }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <StateContainer>
      <StateImage>
        <ServerDownSvg style={{ height: "250px" }} />
      </StateImage>
      <StateTitle>
        {formatMessage({
          id: "AppState.ServerError.title",
          defaultMessage: "Błąd serwera",
        })}
      </StateTitle>
      <StateSubtitle>
        {formatMessage({
          id: "AppState.ServerError.subtitle",
          defaultMessage:
            "Wystąpił nieoczekiwany błąd serwera. Odśwież stronę lub spróbuj ponownie później!",
        })}
      </StateSubtitle>
      <StateAction
        action={() => {
          onAction();
        }}
      >
        {formatMessage({
          id: "AppState.ServerError.actionButton",
          defaultMessage: "Wróć na stronę główną",
        })}
      </StateAction>
    </StateContainer>
  );
};
