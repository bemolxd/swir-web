import { Component, ComponentType, ReactNode } from "react";

import { IErrorBoundaryProps, ErrorBoundary } from "./ErrorBoundary";

export const withErrorBoundary = <Props extends unknown, TError extends Error>(
  Wrapper: ComponentType<Props>,
  props?: Omit<IErrorBoundaryProps<TError>, "children">
) => {
  return class extends Component<Props> {
    render(): ReactNode {
      return (
        <ErrorBoundary fallback={props?.fallback} onError={props?.onError}>
          <Wrapper {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};
