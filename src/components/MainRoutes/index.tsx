import { Route, Routes } from "react-router-dom";

import { ItemsContainer } from "containers/Items";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="sprzet" element={<ItemsContainer />} />
    </Routes>
  );
};
