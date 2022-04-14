import { useIntl } from "react-intl";

import {
  StateContainer,
  StateImage,
  StateTitle,
  StateSubtitle,
} from "./components";
import { FloatingSvg } from "./svg";

export const EmptyList = () => {
  const { formatMessage } = useIntl();

  return (
    <StateContainer>
      <StateImage>
        <FloatingSvg style={{ height: "150px" }} />
      </StateImage>
      <StateTitle>
        {formatMessage({
          id: "AppState.EmptyList.title",
          defaultMessage: "Brak elementów",
        })}
      </StateTitle>
      <StateSubtitle>
        {formatMessage({
          id: "AppState.EmptyList.subtitle",
          defaultMessage:
            "Na ten moment nic tutaj nie znaleźliśmy. Spróbuj ponownie później!",
        })}
      </StateSubtitle>
    </StateContainer>
  );
};
