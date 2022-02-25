import { ComponentType, ReactElement } from "react";
import {
  ErrorBoundary as ReactErrorBoundary,
  ErrorBoundaryPropsWithFallback,
} from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import { IChildrenProp } from "types";

import { ErrorStrategy } from "./ErrorStrategy";

export interface Fallback<TError> {
  error: TError;
}

type ErrorFallback<TError> = ComponentType<Fallback<TError>>;

interface ErrorBoundaryProps<TError> {
  onResetKeysChange?: ErrorBoundaryPropsWithFallback["onResetKeysChange"];
  onReset?(): void;
  onError?(error: Error, info: { componentStack: string }): void;
  fallback?: ErrorFallback<TError> | ReactElement<any, any>;
  resetKeys?: any[];
}

export interface IErrorBoundaryProps<TError>
  extends ErrorBoundaryProps<TError>,
    IChildrenProp {}

export const ErrorBoundary = <TError extends Error>({
  onResetKeysChange,
  onReset,
  onError,
  fallback,
  resetKeys,
  children,
}: IErrorBoundaryProps<TError>) => {
  const { reset: queryErrorReset } = useQueryErrorResetBoundary();

  return (
    <ReactErrorBoundary
      onResetKeysChange={onResetKeysChange}
      onReset={onReset ?? queryErrorReset}
      onError={onError}
      resetKeys={resetKeys}
      FallbackComponent={fallback ? (fallback as any) : undefined}
      fallbackRender={
        !fallback
          ? ({ resetErrorBoundary, error }) => (
              <ErrorStrategy
                error={error}
                resetErrorBoundary={resetErrorBoundary}
              />
            )
          : () => null
      }
    >
      {children}
    </ReactErrorBoundary>
  );
};
