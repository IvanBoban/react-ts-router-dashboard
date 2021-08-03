import React from "react";
import { Route, RouteChildrenProps, Switch } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";
import { Dashboard, PrivatePageOne } from "../pages/Private";

export default function PrivateRouter(props: RouteChildrenProps) {
  const { match } = props;
  return (
    <UserContextProvider>
      <Switch>
        <Route exact path={`${match?.url}`} component={Dashboard} />
        <Route
          exact
          path={`${match?.url}/privatepageone`}
          component={PrivatePageOne}
        />
      </Switch>
    </UserContextProvider>
  );
}
