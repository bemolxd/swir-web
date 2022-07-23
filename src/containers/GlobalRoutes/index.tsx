import { Route, Routes } from "react-router-dom";

import { Redirect } from "components/Routes";

import { Users } from "containers/Users";
import { UserDetails } from "containers/UserDetails";
import { AdminOrders } from "containers/AdminOrders";
import { ItemsContainer } from "containers/Items";
import { ItemDetailsContainer } from "containers/ItemDetails";
import { AdminOrderDetails } from "containers/AdminOrderDetails";
import { Privacy } from "containers/Privacy";
import { ArchivedOrders } from "containers/ArchivedOrders";
import { EditItemDetails } from "containers/EditItemDetails";

export const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/sprzet" element={<ItemsContainer />} />
      <Route path="/sprzet/:itemId" element={<ItemDetailsContainer />} />
      <Route path="/sprzet/:itemId/edytuj" element={<EditItemDetails />} />
      <Route path="/uzytkownicy" element={<Users />} />
      <Route path="/uzytkownicy/:userId" element={<UserDetails />} />
      <Route path="/zgloszenia" element={<AdminOrders />} />
      <Route path="/zgloszenia/:orderId" element={<AdminOrderDetails />} />
      <Route path="/archiwum" element={<ArchivedOrders />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Redirect to="/sprzet" />} />
    </Routes>
  );
};
