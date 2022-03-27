import { IntlProvider } from "react-intl";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {}

export const ReactIntlProvider = ({ children }: IProps) => {
  return (
    <IntlProvider locale={navigator.language} onError={() => ({})}>
      {children}
    </IntlProvider>
  );
};
