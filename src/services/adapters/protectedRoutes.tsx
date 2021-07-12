import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./cookie.config";

const PrivateRoute = ({
  component: Component,
  path,
  exact,
}: {
  component: any;
  path: string;
  exact: boolean;
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props: any) => {
        let token = Auth.getCipher();
        if (!token) {
          return <Redirect to={{ pathname: "/" }} />;
        }
        return <Component />;
      }}
    />
  );
};

export default PrivateRoute;
