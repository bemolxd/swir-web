import {
  Component,
  ComponentType,
  ReactChild,
  ReactFragment,
  ReactNode,
  ReactPortal,
  Suspense,
} from "react";

import { ContentLoading } from "components/Loading";

interface SuspenseProps {
  fallback: boolean | ReactChild | ReactFragment | ReactPortal;
}

export const withSuspense = <ComponentProps extends unknown>(
  Wrapper: ComponentType<ComponentProps>,
  props?: SuspenseProps
) => {
  return class extends Component<ComponentProps> {
    render(): ReactNode {
      return (
        <Suspense fallback={props?.fallback ?? <ContentLoading />}>
          <Wrapper {...this.props} />
        </Suspense>
      );
    }
  };
};
