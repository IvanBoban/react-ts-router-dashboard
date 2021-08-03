import React from "react";
import { Redirect, Route, RouteChildrenProps, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Home, PublicPageOne } from "../pages/Public";

export default function PublicRouter(props: RouteChildrenProps) {
  const { match } = props;

  return (
    <Switch>
      <PublicRoute path={`${match?.url}`} component={Home} />
      <PublicRoute
        path={`${match?.url}/publicpageone`}
        component={PublicPageOne}
      />
    </Switch>
  );
}

interface PublicRouteProps {
  component: React.ComponentType;
  path: string;
}
function PublicRoute(props: PublicRouteProps) {
  const { component, path } = props;
  const { isAuth } = React.useContext(AuthContext);

  if (isAuth) {
    return <Redirect to="/app" />;
  }

  return <Route exact path={path} component={component} />;
}
