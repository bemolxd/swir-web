import { memo } from "react";
import { AxiosError } from "axios";

import { LoginComponent } from "components/Auth";

import { Fallback } from "./ErrorBoundary";

interface IProps extends Fallback<Error> {
  resetErrorBoundary(...args: unknown[]): void;
}

export const ErrorStrategy = memo(({ error }: IProps) => {
  console.log("error", error);

  switch ((error as AxiosError).response?.status) {
    case 401:
      return <LoginComponent />;

    default:
      return <div>error</div>;
  }
});
