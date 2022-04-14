import { memo } from "react";
import { AxiosError } from "axios";

import { LoginComponent } from "components/Auth";
import { ServerError, NotFoundError } from "components/AppState";

import { Fallback } from "./ErrorBoundary";

interface IProps extends Fallback<Error> {
  resetErrorBoundary(...args: unknown[]): void;
}

export const ErrorStrategy = memo(({ error, resetErrorBoundary }: IProps) => {
  console.log("error", error);

  switch ((error as AxiosError).response?.status) {
    case 401:
      return <LoginComponent />;

    case 403:
    case 404:
      return <NotFoundError onAction={resetErrorBoundary} />;

    default:
      return <ServerError onAction={resetErrorBoundary} />;
  }
});
