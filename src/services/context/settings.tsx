import { lazy, Suspense, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextLoader } from "../../shared/loaders";
import ProtectedRoutes from "../adapters/protectedRoutes";

const ClientLoginComponent = lazy(
  () => import("../../pages/auth/client-login")
);
const ClientSignupComponent = lazy(
  () => import("../../pages/auth/client-signup")
);
const ClientRegistrationComponent = lazy(
  () => import("../../pages/client-registration")
);
const DriverSignupComponent = lazy(
  () => import("../../pages/auth/driver-signup")
);

const DriverRegistationComponent = lazy(
  () => import("../../pages/driver-registration")
);
const LandingPageComponent = lazy(() => import("../../pages/landingpage"));

const SettingsConfig = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={ContextLoader()}>
          <Switch>
            <Route
              component={ClientLoginComponent}
              path={"/client-login"}
              exact={true}
            />
            <Route
              component={ClientSignupComponent}
              path={"/client-signup"}
              exact={true}
            />
            <Route
              component={DriverSignupComponent}
              path={"/driver-signup"}
              exact={true}
            />
            <ProtectedRoutes
              component={DriverRegistationComponent}
              path={"/driver-registration"}
              exact={true}
            />
            <Route
              component={ClientRegistrationComponent}
              path={"/client-registration"}
              exact={true}
            />
            <Route component={LandingPageComponent} path={"/"} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default SettingsConfig;
