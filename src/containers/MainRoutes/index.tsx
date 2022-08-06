import { Routes, Route } from "react-router-dom";

import { Redirect } from "components/Routes";

import { ItemsContainer } from "containers/Items";
import { ItemDetailsContainer } from "containers/ItemDetails";
import { UserOrders } from "containers/UserOrders";
import { UserOrderDetails } from "containers/UserOrderDetails";
import { UserOrderSummary } from "containers/UserOrderSummary";
import { Privacy } from "containers/Privacy";
import { ArchivedOrders } from "containers/ArchivedOrders";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/sprzet" element={<ItemsContainer />} />
      <Route path="/sprzet/:itemId" element={<ItemDetailsContainer />} />
      <Route path="/zgloszenia" element={<UserOrders />} />
      <Route path="/zgloszenia/:orderId" element={<UserOrderDetails />} />
      <Route
        path="/zgloszenia/:orderId/podsumowanie"
        element={<UserOrderSummary />}
      />
      <Route path="/archiwum" element={<ArchivedOrders />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Redirect to="/sprzet" />} />
    </Routes>
  );
};
