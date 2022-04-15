import { Route, Routes } from "react-router-dom";

import { Redirect } from "components/Routes";

import { Users } from "containers/Users";

export const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/uzytkownicy" element={<Users />} />
      <Route path="*" element={<Redirect to="/uzytkownicy" />} />
    </Routes>
  );
};
