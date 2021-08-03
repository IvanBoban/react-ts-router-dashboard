import React from "react";
import { Redirect, Route, RouteChildrenProps, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { Dashboard, PrivatePageOne } from "../pages/Private";

export default function PrivateRouter(props: RouteChildrenProps) {
  const { match } = props;
  return (
    <UserContextProvider>
      <Switch>
        <PrivateRoute path={`${match?.url}`} component={Dashboard} />
        <PrivateRoute
          path={`${match?.url}/privatepageone`}
          component={PrivatePageOne}
        />
      </Switch>
    </UserContextProvider>
  );
}

interface PrivateRouteProps {
  component: React.ComponentType;
  path: string;
}
function PrivateRoute(props: PrivateRouteProps) {
  const { component, path } = props;
  const { isAuth } = React.useContext(AuthContext);

  if (!isAuth) {
    return <Redirect to="/unauth" />;
  }

  return <Route exact path={path} component={component} />;
}
