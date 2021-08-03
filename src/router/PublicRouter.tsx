import React from "react";
import { Route, RouteChildrenProps, Switch } from "react-router-dom";
import { Home, PublicPageOne } from "../pages/Public";

export default function PublicRouter(props: RouteChildrenProps) {
  const { match } = props;

  return (
    <Switch>
      <Route exact path={match?.url} component={Home} />
      <Route
        exact
        path={`${match?.url}/publicpageone`}
        component={PublicPageOne}
      />
    </Switch>
  );
}
