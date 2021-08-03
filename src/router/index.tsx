import React from "react";
import { Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

export default function Router() {
  return (
    <>
      <Route path="/unauth" component={PublicRouter} />
      <Route path="/app" component={PrivateRouter} />
    </>
  );
}
