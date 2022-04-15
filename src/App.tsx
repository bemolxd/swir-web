import { ContextType } from "types";

import { AppLayout } from "components/Layout";
import { useGetContextType } from "components/Auth";

import { GlobalRoutes } from "containers/GlobalRoutes";
import { MainRoutes } from "containers/MainRoutes";

function App() {
  const contextType = useGetContextType();

  if (contextType === ContextType.GLOBAL) {
    return (
      <AppLayout>
        <GlobalRoutes />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <MainRoutes />
    </AppLayout>
  );
}

export default App;
