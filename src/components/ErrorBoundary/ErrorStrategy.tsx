import { memo } from "react";
import { AxiosError } from "axios";

import { Fallback } from "./ErrorBoundary";

interface IProps extends Fallback<Error> {
  resetErrorBoundary(...args: unknown[]): void;
}

export const ErrorStrategy = memo(({ error }: IProps) => {
  switch ((error as AxiosError).response?.status) {
    case 401:
      return <div>login duuude</div>;

    default:
      return <div>error</div>;
  }

  return null;
});
