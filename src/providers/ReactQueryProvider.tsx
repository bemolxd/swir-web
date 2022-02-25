import { QueryClient, QueryClientProvider } from "react-query";

import { IChildrenProp } from "types";

const queryClient = new QueryClient();

interface IProps extends IChildrenProp {}

export const ReactQueryProvider = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
