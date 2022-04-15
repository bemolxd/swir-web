import { Route, Routes } from "react-router-dom";

import { Redirect } from "components/Routes";

import { Users } from "containers/Users";
import { UserDetails } from "containers/UserDetails";

export const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/uzytkownicy" element={<Users />} />
      <Route path="/uzytkownicy/:userId" element={<UserDetails />} />
      <Route path="*" element={<Redirect to="/uzytkownicy" />} />
    </Routes>
  );
};
