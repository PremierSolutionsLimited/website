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

// client dashboard
const ClientDashboardLayout = lazy(
  () => import("../../shared/layout/client-layout")
);
// reset password
const ResetPassword = lazy(() => import("../../pages/fogotpassword/reset"));

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
            <Route
              component={DriverRegistationComponent}
              path={"/driver-registration"}
              exact={true}
            />
            <Route
              component={DriverRegistationComponent}
              path={"/driver-registration"}
              exact={true}
            />
            <Route
              component={ClientRegistrationComponent}
              path={"/client-registration"}
              exact={true}
            />
            <ProtectedRoutes
              exact={true}
              component={ResetPassword}
              path={"/app/resetpassword"}
            />
            <Route component={ClientDashboardLayout} path={"/app/"} />
            <Route component={LandingPageComponent} path={"/"} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default SettingsConfig;
