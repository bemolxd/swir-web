import { Redirect, Route, Switch } from "react-router-dom";

import { ItemsContainer } from "containers/Items";
import { ItemDetailsContainer } from "containers/ItemDetails";

export const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/sprzet" component={ItemsContainer} />
      <Route path="/sprzet/:itemId" component={ItemDetailsContainer} />
      <Route render={() => <Redirect to="/sprzet" />} />
    </Switch>
  );
};
