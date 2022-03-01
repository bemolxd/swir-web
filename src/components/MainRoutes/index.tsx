import { Route, Routes } from "react-router-dom";

import { ItemsContainer } from "containers/Items";
import { ItemDetailsContainer } from "containers/ItemDetails";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="sprzet" element={<ItemsContainer />} />
      <Route path="sprzet/:itemId" element={<ItemDetailsContainer />} />
    </Routes>
  );
};
