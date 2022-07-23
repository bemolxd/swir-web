import { AppLayout } from "components/Layout";
import { useGetContextType } from "components/Auth";

import { GlobalRoutes } from "containers/GlobalRoutes";
import { MainRoutes } from "containers/MainRoutes";

function App() {
  const { isGlobal, isTech } = useGetContextType();

  if (isGlobal || isTech) {
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
