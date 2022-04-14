import { useIntl } from "react-intl";
import { Link } from "@chakra-ui/react";

import { useQueryParamsConsumer } from "components/QueryParamsV2";

import {
  StateAction,
  StateContainer,
  StateImage,
  StateSubtitle,
  StateTitle,
} from "./components";
import { TakenSvg } from "./svg/TakenSvg";

interface IProps {
  onAction?(): void;
}

export const NotFoundError = ({ onAction }: IProps) => {
  const { formatMessage } = useIntl();
  const { navigate } = useQueryParamsConsumer();

  return (
    <StateContainer>
      <StateImage>
        <TakenSvg style={{ height: "250px" }} />
      </StateImage>
      <StateTitle>
        {formatMessage({
          id: "AppState.NotFoundError.title",
          defaultMessage: "Brak wyników",
        })}
      </StateTitle>
      <StateSubtitle>
        {formatMessage({
          id: "AppState.NotFoundError.subtitle",
          defaultMessage:
            "Upewnij się, że adres URL jest prawidłowy. Jeśli uważasz, że problem leży po naszej stronie, skontaktuj się z nami.",
        })}
      </StateSubtitle>
      <StateAction
        action={() => {
          if (onAction) onAction();
          navigate("/");
        }}
      >
        {formatMessage({
          id: "AppState.NotFoundError.actionButton.goHome",
          defaultMessage: "Wróć na stronę główną",
        })}
      </StateAction>
      <Link href="mailto:swir.multimed@gmail.com">
        {formatMessage({
          id: "AppState.NotFoundError.contactUs",
          defaultMessage: "Napisz do nas",
        })}
      </Link>
    </StateContainer>
  );
};
